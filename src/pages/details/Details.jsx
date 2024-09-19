import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import styles from "./Details.module.css";

const Details = () => {

    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [alreadyFav, setalreadyFav] = useState(false);
    const [btnText, setBtnText] = useState("Favoritar");

    useEffect(() => {
        const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
        const favs = JSON.parse(localStorage.getItem("fav")) || [];
        const selectedHotel = hotels.find(hotel => hotel.id === parseInt(id, 10));

        if (favs.find(fav => fav.id === parseInt(id, 10))) {
            setalreadyFav(true);
        }
        setHotel(selectedHotel);
    }, [id]);

    useEffect(() => {
        setBtnText(alreadyFav ? "Remover Favorito" : "Favoritar")
    }, [alreadyFav])

    if (!hotel) return <div>Carregando...</div>;

    const fullStar = "../public/assets/star.png";
    const emptyStar = "../assets/starEmpty.png";

    // Gera array de estrelas cheias e vazias com base na nota do hotel
    const starsArr = Array(5).fill(emptyStar).map((_, index) =>
        index < Math.floor(hotel.note) ? fullStar : emptyStar
    );

    function handleFavorite() {
        const favs = localStorage.getItem("fav") || [];

        if (favs.length == 0) {
            localStorage.setItem("fav", JSON.stringify([
                {
                    "id": hotel.id,
                    "imagePath": hotel.imagePath,
                    "city": hotel.city,
                    "state": hotel.state,
                    "title": hotel.title,
                    "note": hotel.note,
                    "price": hotel.price,
                    "promo": hotel.promo
                }
            ]));
        } else {
            const arr = JSON.parse(favs);
            arr.push(
                {
                    "id": hotel.id,
                    "imagePath": hotel.imagePath,
                    "city": hotel.city,
                    "state": hotel.state,
                    "title": hotel.title,
                    "note": hotel.note,
                    "price": hotel.price,
                    "promo": hotel.promo
                }
            );
            localStorage.setItem("fav", JSON.stringify(arr));
            setalreadyFav(true);
        }
    }

    function handleRemoveFavorite() {
        console.log("removendo...");
        const favs = JSON.parse(localStorage.getItem("fav")) || [];
        const updated = favs.filter(fav => fav.id !== hotel.id);
    
        localStorage.setItem("fav", JSON.stringify(updated));
        setalreadyFav(false);
    }

    return (
        <div className={styles.details}>
            <img className={styles.hotelImage} src={hotel.imagePath} alt={hotel.title} />
            <div className={styles.detailsContent}>
                <div className={styles.info}>
                    <h1>{hotel.title}</h1>
                    <p>{hotel.city} - {hotel.state}</p>
                    <p><strong>R$ {hotel.price}</strong> Por Diária</p>
                    <div className={styles.stars}>
                    {starsArr.map((star, index) => (
                            <img key={index} src={star} alt="star" className={styles.star} />
                        ))}
                    </div>
                </div>
                <div className={styles.buy}>
                    <Button
                        text={"Reservar"}
                        width={"100%"}
                    />
                    <Button
                        text={btnText}
                        width={"100%"}
                        onClick={alreadyFav ? handleRemoveFavorite : handleFavorite}
                    />
                </div>
            </div>
        </div>
    )
}

export default Details;