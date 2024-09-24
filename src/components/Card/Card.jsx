import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = (
    {
        id,
        title,
        imagePath,
        note,
        city,
        state,
        price,
        stars,
        actions,
        onEdit,
        onRemove
    }) => {

    const fullStar = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png ";
    const emptyStar = "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"

    const starsArr = Array.from({ length: 5 }, (_, index) =>
        index < stars ? fullStar : emptyStar
    );

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/detalhe/${id}`);
    }

    return (
        <div className={styles.card}>
            <div className={styles.clickable} onClick={handleClick}>
                <div className={[styles.stars]}>
                    {starsArr.map((star, index) => (
                        <img key={index} src={star} alt="star" className={styles.star} />
                    ))}
                </div>
                <img className={styles.cardImage} src={imagePath} alt={title} />
                <div className={styles.cardContent}>
                    <h2>{title}</h2>
                    <p>{city} - {state}</p>
                    <p className={price}>R$ {price}</p>
                </div>
            </div>
            {
                actions && (
                    <div className={styles.actions}>
                        <Button
                            text={"Editar"}
                            onClick={() => onEdit(id)}
                        />
                        <Button
                            text={"Apagar"}
                            onClick={() => onRemove(id)}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Card;