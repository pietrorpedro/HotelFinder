import styles from "./CardH.module.css";

const CardH = ({imagePath, title, text}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.cardImage}>
                <img src={imagePath} alt={title} />
            </div>
        </div>
    )
}

export default CardH;