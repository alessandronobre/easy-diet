import { carregarNav } from '/src/assets/js/nav.js';
import { ocutarTablePorErro, gerarRegistros, campoBuscar } from '/src/assets/js/utils/tableUtils.js';
carregarNav();
campoBuscar(listarPacientes, listarPacientesPorNome);

const TODOS = 'todos';
const POR_NOME = 'nome';
const MSG_EXCLUSAO = 'Tem certeza que deseja excluir o paciente ?';

async function listarPacientes(page = 0) {
    try {
        const response = await fetch(`http://localhost:8080/api/paciente/${page}`);

        if (!response.ok) {
            throw new Error(`Erro de Rede: ${response.statusText}`);
        }

        const data = await response.json();
        gerarRegistros(data, 'Você ainda não possui pacientes cadastrados..', TODOS, MSG_EXCLUSAO, excluirPaciente, listarPacientes);


    } catch (error) {
        console.log('Error: ' + error);
        ocutarTablePorErro('Erro ao listar pacientes', TODOS);
    }
}

listarPacientes();

async function listarPacientesPorNome(nome = inputSeach.value.trim(), page = 0) {
    try {
        const response = await fetch(`http://localhost:8080/api/paciente/nome/${nome}/${page}`);
        if (!response.ok) {
            throw new Error(`Erro de Rede: ${response.statusText}`);
        }

        const data = await response.json();
        gerarRegistros(data, 'Nenhum paciente encontrado com esse nome', POR_NOME, MSG_EXCLUSAO, excluirPaciente, listarPacientesPorNome);

    } catch (error) {
        console.log('Error: ' + error);
        ocutarTablePorErro('Erro ao listar pacientes', TODOS);
    }
}

async function excluirPaciente(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/paciente/${id}`, { method: "DELETE" });

        if (!response.ok) {
            throw new Error(`Erro de Rede: ${response.statusText}`);
        }
        location.reload();

    } catch (error) {
        alert('Erro ao excluir paciente: ' + error.message);
        throw error;
    }
}



