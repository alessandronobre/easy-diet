export { gerarPaginacao }

const TODOS = 'todos';
let currentPage = 1;
function gerarPaginacao(totalPages, tipoBusca, callback) {

    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '❮';
    prevBtn.addEventListener('click', () => {
        if (currentPage >= 2) {
            currentPage -= 2;
            tipoDeListagem(tipoBusca, currentPage);
            currentPage++
        }
    });

    paginationElement.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement('a');
        link.textContent = i;
        link.className = 'btn btn-primary';
        link.id = 'buttonPages';
        link.addEventListener('click', () => {
            currentPage = i -= 1;
            tipoDeListagem(tipoBusca, currentPage);
            currentPage++
        });

        if (i === currentPage) {
            link.classList.add('active');
        }

        paginationElement.appendChild(link);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '❯';
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            tipoDeListagem(tipoBusca, currentPage);
            currentPage++;
        }
    });
    paginationElement.appendChild(nextBtn);

    function tipoDeListagem(tipoBusca, pagina) {
        if (tipoBusca === TODOS) {
            callback(pagina);
        } else {
            callback(inputSeach.value.trim(), pagina);
        }
    }
}