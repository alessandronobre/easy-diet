import { Route, Routes } from 'react-router-dom';
import styles from '/src/components/surfaces/main/style.module.css';
import Home from '/src/pages/Home.jsx';
import Pacientes from '/src/pages/paciente/Pacientes.jsx';
import Paciente from '/src/pages/paciente/Paciente.jsx';
import PacienteForm from '/src/pages/paciente/PacienteForm.jsx';
import Configuracao from '/src/pages/Configuracao.jsx';

export default function Main() {

  return (
    <>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/pacientes/:id" element={<Paciente />} />
          <Route path="/pacientes/new" element={<PacienteForm />} />

          <Route path="/configuracao" element={<Configuracao />} />
        </Routes>
      </main>
    </>
  )
}
