export { carregarNav }

function carregarNav() {
    fetch('/src/view/nav.html')
        .then(response => response.text())
        .then(data => {
            const nav = document.querySelector('#nav');
            nav.innerHTML = data;
            const logo = document.querySelector('#logo');
            logo.addEventListener('click', () => {
                redirecionaToHome();
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo HTML:', error));
}

function redirecionaToHome() {
    window.location.href = '/src/view/index.html';
}