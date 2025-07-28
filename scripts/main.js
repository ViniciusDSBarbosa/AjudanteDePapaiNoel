document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Simular carregamento de cartinhas
    const childrenGrid = document.querySelector('.children-grid');
    
    // Dados simulados - na aplicação real, isso viria de uma API
    const mockChildren = [
        {
            id: 1,
            name: "Maria",
            age: 7,
            city: "São Paulo, SP",
            wish: "Quero uma boneca e um livro de histórias.",
            image: "images/child1.jpg"
        },
        {
            id: 2,
            name: "João",
            age: 9,
            city: "Rio de Janeiro, RJ",
            wish: "Sonho com uma bicicleta azul.",
            image: "images/child2.jpg"
        },
        {
            id: 3,
            name: "Ana",
            age: 6,
            city: "Belo Horizonte, MG",
            wish: "Gostaria de um kit de pintura.",
            image: "images/child3.jpg"
        },
        {
            id: 4,
            name: "Pedro",
            age: 8,
            city: "Porto Alegre, RS",
            wish: "Quero um jogo de tabuleiro para brincar com meus irmãos.",
            image: "images/child4.jpg"
        },
        {
            id: 5,
            name: "Carla",
            age: 5,
            city: "Salvador, BA",
            wish: "Desejo uma mochila da princesa e lápis de cor.",
            image: "images/child5.jpg"
        },
        {
            id: 6,
            name: "Lucas",
            age: 10,
            city: "Recife, PE",
            wish: "Meu sonho é ter um patins.",
            image: "images/child6.jpg"
        }
    ];
    
    // Função para renderizar as cartinhas
    function renderChildren(children) {
        childrenGrid.innerHTML = '';
        
        if (children.length === 0) {
            childrenGrid.innerHTML = '<div class="no-results">Nenhuma criança encontrada nesta região.</div>';
            return;
        }
        
        children.forEach(child => {
            const childCard = document.createElement('div');
            childCard.className = 'child-card';
            childCard.innerHTML = `
                <div class="child-image">
                    <img src="${child.image}" alt="${child.name}">
                </div>
                <div class="child-info">
                    <h3>${child.name} <span class="child-age">${child.age} anos</span></h3>
                    <p><strong>Cidade:</strong> ${child.city}</p>
                    <p><strong>Desejo:</strong> ${child.wish}</p>
                    <a href="#" class="btn-apadrinhar" data-id="${child.id}">Apadrinhar ${child.name}</a>
                </div>
            `;
            childrenGrid.appendChild(childCard);
        });
        
        // Adicionar evento aos botões de apadrinhar
        const apadrinharBtns = document.querySelectorAll('.btn-apadrinhar');
        apadrinharBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const childId = this.getAttribute('data-id');
                alert(`Você escolheu apadrinhar a criança ID: ${childId}. Em uma aplicação real, isso enviaria uma requisição para o backend.`);
            });
        });
    }
    
    // Filtro por região
    const regionFilter = document.getElementById('region');
    regionFilter.addEventListener('change', function() {
        // Simular filtro - na aplicação real, isso faria uma requisição para a API
        const region = this.value;
        if (region === 'all') {
            renderChildren(mockChildren);
        } else {
            // Filtro simulado - na prática, a API faria isso
            const filtered = mockChildren.filter(child => {
                // Simulando que algumas crianças estão em regiões específicas
                const regionsMap = {
                    1: 'sudeste',
                    2: 'sudeste',
                    3: 'sudeste',
                    4: 'sul',
                    5: 'nordeste',
                    6: 'nordeste'
                };
                return regionsMap[child.id] === region;
            });
            renderChildren(filtered);
        }
    });
    
    // Carregar cartinhas inicialmente
    setTimeout(() => {
        renderChildren(mockChildren);
    }, 1000); // Simular tempo de carregamento
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Em uma aplicação real, isso seria enviado para o backend.');
            this.reset();
        });
    }
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});