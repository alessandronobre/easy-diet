
import { useParams } from "react-router-dom";
import styles from '/src/pages/paciente/paciente.module.css';
import EditButton from '/src/components/buttons/EditButton.jsx';
import DeleteButton from '/src/components/buttons/DeleteButton.jsx';

export default function Paciente() {
  const {id} = useParams();
  
  var paciente = {
    nome: "Alessandro de Lima Nobre",
    idade: 30,
    email: "alessandro@example.com",
    genero: "Masculino",
    altura: 180,
    peso: 78
  }
  return (
    <>
      <div class="dados_name" className={styles.dados_name}>
        <h2>{paciente.nome}</h2>
      </div>

      <div class="dados" className={styles.dados}>
        <p><strong>Idade:</strong> {paciente.idade} anos</p>
        <p><strong>Email:</strong> {paciente.email}</p>
        <p><strong>Gênero:</strong> {paciente.genero}</p>
        <p><strong>Altura:</strong> {paciente.altura} cm</p>
        <p><strong>Peso:</strong> {paciente.peso} kg</p>
      </div><br/>

      <div class=".button_container" className={styles.button_container}>
        <button
          class="btnViewMaros"
          className={styles.btnViewMaros}
          onClick={() => alert("Editar Perfil")}>
          Historico de Macros
        </button>
        -
        <button
          class="btnVGerarMaros"
          className={styles.btnGerarMaros}
          onClick={() => alert("Configurações")}>
          Gerar Macros
        </button>
        -
        <EditButton />
        -
        <DeleteButton />
      </div>
    </>
  );
};
