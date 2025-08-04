document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados - na prática viria da API
    const mockChildren = [
        {
            id: 1,
            name: "João",
            age: 8,
            city: "Rio de Janeiro, RJ",
            wish: "Sonho com uma bicicleta para ir à escola",
            image: "images/child2.jpg"
        },
        // Mais crianças...
    ];

    // Filtros interativos
    document.getElementById('btn-filtrar').addEventListener('click', function() {
        // Lógica de filtragem aqui
        console.log("Filtrando...");
    });

    // Carregar mais crianças ao rolar
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            // Carregar mais itens via API
        }
    });
});