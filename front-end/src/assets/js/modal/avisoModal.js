export {popUpAviso}

async function popUpAviso(msg) {
    await exibirModal();

    const meuDialog = document.getElementById('meuDialog');
    const message = document.getElementById('msg');
    message.textContent = msg;

    const cancelarDialogBtn = document.getElementById('fecharDialogBtn');
    cancelarDialogBtn.onclick = () => {
        meuDialog.close();
    };

    meuDialog.showModal();
}

async function exibirModal() {
    try {
        const modalHTML = await fetch('/src/view/modal/avisoModal.html');
        const modalTexto = await modalHTML.text();

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalTexto;

        document.body.appendChild(modalContainer);
    } catch (erro) {
        console.error('Erro ao exibir o modal:', erro);
    }
}