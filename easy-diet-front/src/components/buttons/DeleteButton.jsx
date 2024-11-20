import styles from '/src/components/buttons/DeleteButton.module.css';

export default function DeleteButton() {

    return (
        <>
            <button className={styles.btn_delete} type="button">Deletar</button>
        </>
    )
}
