export { openLoad }


function openLoad() {
    fetch('/src/view/modal/load.html')
        .then(response => response.text())
        .then(data => {
            const dialogLoad = document.body.createElement('div');
            dialogLoad.id = 'dialog_load';
            dialogLoad.innerHTML = data;
            dialogLoad.classList.add('mostrar');
        })
        .catch(error => console.error('Erro ao carregar o arquivo HTML:', error));
}

const btn = document.getElementById('btn');
btn.onclick = () => {
    document.getElementById('dialog_load').classList.add('mostrar');
};

const cancelarDialogBtn = document.getElementById('btnFechar');
cancelarDialogBtn.onclick = () => {
    document.getElementById('dialog_load').classList.remove('mostrar');
};

