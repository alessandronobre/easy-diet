import { popUpAviso } from '/src/assets/js/modal/avisoModal.js';
import { popUpErro } from '/src/assets/js/modal/erroModal.js';
import { excluirRegisto } from '/src/assets/js/modal/excluirRegistroModal.js';
import { gerarPaginacao } from '/src/assets/js/utils/paginacaoUtils.js';

export { ocutarTablePorErro, gerarRegistros, campoBuscar }

const TODOS = 'todos';
const WORKOUT = 'workout';
const POR_NOME = 'nome';

function campoBuscar(listarTodos, listarPorNome) {
    var inputSeach = document.querySelector('#inputSeach');
    var myTimeout;
    inputSeach.addEventListener("input", () => {
        clearTimeout(myTimeout);
        myTimeout = setTimeout(() => {
            var input = inputSeach.value.trim();
            if (input === undefined || input === null || input === '') {
                listarTodos();
                location.reload();
            } else {
                listarPorNome(input);
            }
        }, 1000);
    });
}

function ocutarTableSemRegistros(msg, tipoBusca) {
    if (tipoBusca === TODOS) {
        var tabela = document.getElementById('table');
        tabela.hidden = true;
        var inputSeach = document.querySelector('#inputSeach');
        inputSeach.hidden = true;
        var pageTools = document.querySelector('#pagination');
        pageTools.hidden = true;

        var div = document.querySelector('#seach');
        const span = document.createElement('span');
        span.textContent = msg;
        span.style.color = '#fff';
        div.appendChild(span);
    } else {
        popUpAviso(msg);
    }
}

function ocutarTablePorErro(msg, tipoBusca) {
    if (tipoBusca === TODOS) {
        var tabela = document.getElementById('table');
        tabela.hidden = true;
        var inputSeach = document.querySelector('#inputSeach');
        inputSeach.hidden = true;
        var pageTools = document.querySelector('#pagination');
        pageTools.hidden = true;

        popUpErro(msg);
    } else {
        popUpAviso(msg);
    }
}

function gerarBtnsAcoes(elemento, celulaAcoes, msgExclusao, callback) {
    var btnGerarMacros = document.createElement('a');
    btnGerarMacros.href = '#';
    btnGerarMacros.id = 'buttonAcoes';
    btnGerarMacros.textContent = 'Gerar Macros';
    btnGerarMacros.className = 'btn btn-primary';
    celulaAcoes.appendChild(btnGerarMacros);

    celulaAcoes.appendChild(document.createTextNode(' '));

    var btnEditar = document.createElement('a');
    btnEditar.textContent = 'Editar';
    btnEditar.href = '#';
    btnEditar.id = 'buttonAcoes';
    btnEditar.className = 'btn btn-warning';
    celulaAcoes.appendChild(btnEditar);

    celulaAcoes.appendChild(document.createTextNode(' '));

    var btnExcluir = document.createElement('a');
    btnExcluir.textContent = 'Excluir';

    btnExcluir.id = 'buttonAcoes';
    btnExcluir.className = 'btn btn-danger';
    btnExcluir.onclick = () => {
        excluirRegisto(elemento.id, msgExclusao, callback);
    };
    celulaAcoes.appendChild(btnExcluir);
}

function gerarRegistros(data, msgSemRegistro, tipoBusca, msgExclusao, callback, tipoListagem) {
    if (data.totalElements != 0) {
        var tabela = document.getElementById('table');
        var tbody = tabela.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        data.content.forEach((elemento) => {
            var linha = tbody.insertRow();
            var celulaNome = linha.insertCell(0);
            var celulaEmail = linha.insertCell(1);
            var celulaAcoes = linha.insertCell(2);

            celulaNome.textContent = elemento.nome;
            celulaEmail.textContent = elemento.email;
            gerarBtnsAcoes(elemento, celulaAcoes, msgExclusao, callback);

            if (tipoBusca === TODOS) {
                gerarPaginacao(data.totalPages, TODOS, (currentPage) => {
                    tipoListagem(currentPage);
                });
            } else {
                gerarPaginacao(data.totalPages, POR_NOME, (nome, currentPage) => {
                    tipoListagem(nome, currentPage);
                });
            }
        });

    } else {
        ocutarTableSemRegistros(msgSemRegistro, tipoBusca);
    }
}