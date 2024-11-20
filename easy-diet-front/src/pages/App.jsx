import styles from '/src/pages/app.module.css';
import Header from '/src/components/surfaces/header/Index';
import Menu from '/src/components/surfaces/menu/Index';
import Main from '/src/components/surfaces/main/Index';

export default function App() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Menu />
        <Main />
      </div>
    </>
  )
}
