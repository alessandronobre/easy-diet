import styles from '/src/pages/home.module.css';

export default function Home() {

  return (
    <>
      <div class="welcome_container" className={styles.welcome_container}>
        <h1 className={styles.img}>Bem-vindo ao Calculador de Macronutrientes!</h1>
        <p>Os macros são a chave para uma alimentação equilibrada e personalizada e com a ajuda do EasyDiet você poderá calcular os macronutrientes de forma mais eficiente!</p>
        <img src="/src/assets/img/home-backgroud.png" alt="banner de boas vindas" style={{ width: '100%', height: '500px' }}/>
      </div>
      
    </>
  )
}
