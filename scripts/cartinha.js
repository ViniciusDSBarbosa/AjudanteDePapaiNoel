document.addEventListener('DOMContentLoaded', function() {
    const formCartinha = document.getElementById('form-cartinha');
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading';
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    // Máscara para idade (3-12 anos)
    document.getElementById('idade').addEventListener('input', function(e) {
        if (this.value < 3) this.value = 3;
        if (this.value > 12) this.value = 12;
    });

    // Validação do arquivo de imagem
    document.getElementById('foto').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('O arquivo deve ter no máximo 5MB');
                e.target.value = '';
            }
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                alert('Apenas arquivos JPG ou PNG são permitidos');
                e.target.value = '';
            }
        }
    });

    // Envio do formulário
    formCartinha.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Exibir loading
        formCartinha.appendChild(loadingIndicator);
        const submitButton = formCartinha.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        // Simular upload para S3 (substitua por chamada real à API)
        try {
            // 1. Coletar dados do formulário
            const formData = {
                nome: document.getElementById('nome').value,
                idade: document.getElementById('idade').value,
                localizacao: document.getElementById('cidade').value,
                instituicao: document.getElementById('instituicao').value,
                pedido: document.getElementById('presente').value,
                foto: document.getElementById('foto').files[0]?.name || null
            };

            // 2. Simular chamada à API Gateway -> Lambda
            console.log('Dados para envio:', formData);
            
            // 3. Simular delay de rede
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // 4. Simular resposta de sucesso
            showSuccessMessage();
            
        } catch (error) {
            console.error('Erro no envio:', error);
            alert('Ocorreu um erro ao enviar a cartinha. Tente novamente.');
        } finally {
            loadingIndicator.remove();
            submitButton.disabled = false;
        }
    });

    function showSuccessMessage() {
        const successHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Cartinha enviada com sucesso!</h3>
                <p>Sua cartinha foi recebida e em breve estará disponível para apadrinhamento.</p>
                <a href="../apadrinhar.html" class="btn-primary">Ver outras cartinhas</a>
            </div>
        `;
        
        formCartinha.innerHTML = successHTML;
    }

    // Carregar cidades dinamicamente (exemplo para SP)
    document.getElementById('cidade').addEventListener('focus', function() {
        if (this.options.length <= 1) {
            const cidadesSP = [
                "São Paulo", "Campinas", "São Bernardo do Campo", 
                "Santo André", "Osasco", "Sorocaba"
            ];
            
            cidadesSP.forEach(cidade => {
                const option = document.createElement('option');
                option.value = `SP-${cidade}`;
                option.textContent = `${cidade}/SP`;
                this.appendChild(option);
            });
        }
    });
});