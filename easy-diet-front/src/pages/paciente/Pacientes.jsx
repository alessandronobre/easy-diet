import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import styles from '/src/pages/paciente/pacientes.module.css';
import Search from '/src/components/inputs/Search.jsx';
import EditButton from '/src/components/buttons/EditButton.jsx';
import DeleteButton from '/src/components/buttons/DeleteButton.jsx';
import pacienteService from '/src/service/api/paciente/pacienteService.js';

export default function Pacientes() {
  // var listaExemplo = [
  //   { id: 1, nome: 'Mark Durval', email: 'mark@gmail.com' },
  //   { id: 2, nome: 'Jacob Antoni', email: 'jacob@hotmail.com' },
  //   { id: 3, nome: 'Larry Burry', email: 'larry@yahoo.com' },
  //   { id: 4, nome: "Ana Souza", email: "ana.souza@example.com" },
  //   { id: 5, nome: "Pedro Costa", email: "pedro.costa@example.com" },
  //   { id: 6, nome: "Fernanda Lima", email: "fernanda.lima@example.com" },
  //   { id: 7, nome: "Lucas Pereira", email: "lucas.pereira@example.com" },
  //   { id: 8, nome: "Beatriz Almeida", email: "beatriz.almeida@example.com" },
  //   { id: 9, nome: "Ricardo Gomes", email: "ricardo.gomes@example.com" },
  //   { id: 10, nome: "Camila Martins", email: "camila.martins@example.com" }
  // ]
  // const [lista, setLista] = useState(listaExemplo);

  const [pacientes, setPacientes] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarPacientes = async () => {
      try {
        const dados = await pacienteService.listar();
        setPacientes(dados);
      } catch (erro) {
        setErro('Erro ao carregar pacientes.');
      }
    };
  
    carregarPacientes();
  }, []);

  // const handleSearch = (query) => { 
  //   setLista(listaExemplo.filter((paciente) =>
  //     paciente.nome.toLowerCase().includes(query.toLowerCase())
  //   ));
  // };

  return (
    <>
      {/* <div class="pacientes_title" className={styles.pacientes_title}>
        <h1>Lista de Pacientes</h1>
      </div>

      <div class="search_and_create" className={styles.search_and_create}>
        <Search onSearch={handleSearch} />
        <button
          class="btn_create_paciente"
          className={styles.btn_create_paciente}
          onClick={() => alert("Editar Perfil")}>
          Cadastrar Paciente
        </button>
      </div>

      <div class="lista_pacientes" className={styles.lista_pacientes}>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id} className={styles.tr}>
                <td>
                  <Link to={`${paciente.id}`}>{paciente.nome}</Link>
                </td>
                <td>{paciente.email}</td>
                <td>
                  <div className={styles.button_container}>
                    <EditButton /> - <DeleteButton />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  )
}