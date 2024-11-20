import styles from '/src/components/surfaces/menu/style.module.css';
import { Link } from 'react-router-dom';

export default function Menu() {

  return (
    <>
      <nav className={styles.nav}>
        <span className={styles.span}>Menu de Opções</span>
        <ul className={styles.ul}>
          <li className={styles.li}><a><Link to="/">Home</Link></a></li>
          <li className={styles.li}><a><Link to="/pacientes">Pacientes</Link></a></li>
          <li className={styles.li}><a><Link to="/cadastro">Cadastro</Link></a></li>
          <li className={styles.li}><a><Link to="/perfil">Perfil</Link></a></li>
          <li className={styles.li}><a><Link to="/configuracao">Configurações</Link></a></li>
        </ul>
      </nav>
    </>
  )
}
