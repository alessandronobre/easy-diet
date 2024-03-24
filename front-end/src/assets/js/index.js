import {carregarNav} from '/src/assets/js/nav.js';

carregarNav();

var btnAreaAluno = document.querySelector('#areaPaciente');
btnAreaAluno.addEventListener("click", () => {
    window.location.href = '/src/view/area_paciente.html';
});