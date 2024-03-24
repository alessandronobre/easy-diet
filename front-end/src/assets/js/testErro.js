const meuDialog = document.getElementById('meuDialog');

const btn = document.getElementById('btn');
btn.onclick = () => {
    document.getElementById('meuDialog').classList.add('mostrar');
};

const cancelarDialogBtn = document.getElementById('btnFechar');
cancelarDialogBtn.onclick = () => {
    document.getElementById('meuDialog').classList.remove('mostrar');
};

