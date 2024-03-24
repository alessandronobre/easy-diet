export { excluirRegisto }

async function excluirRegisto(id, msg, callback) {
    await exibirModal();
    const meuDialog = document.getElementById('meuDialog');
    const message = document.getElementById('msg');
    message.textContent = msg;

    const excluirDialogBtn = document.getElementById('excluirDialogBtn');
    excluirDialogBtn.onclick = () => {
        callback(id);
        meuDialog.close();
    };

    const cancelarDialogBtn = document.getElementById('cancelarDialogBtn');
    cancelarDialogBtn.onclick = () => {
        meuDialog.close();
    };

    meuDialog.showModal();
}

async function exibirModal() {
    try {
        const modalHTML = await fetch('/src/view/modal/excluirRegistroModal.html');
        const modalTexto = await modalHTML.text();

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalTexto;

        document.body.appendChild(modalContainer);
    } catch (erro) {
        console.error('Erro ao exibir o modal:', erro);
    }
}