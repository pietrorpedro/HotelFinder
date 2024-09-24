import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CardH from "../../components/CardH/CardH";
import styles from "./Home.module.css";

const Home = () => {

    const [hotels, setHotels] = useState([]);
    const [promoHotels, setPromoHotels] = useState([]);
    const [favsList, setFavsList] = useState(null);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("hotels")) || [];
        const favs = JSON.parse(localStorage.getItem("fav"))

        const hotelslist = storage.filter(hotel => !hotel.promo);
        const promoStorage = storage.filter(hotel => hotel.promo)

        setHotels(hotelslist.slice(0, 8));
        setPromoHotels(promoStorage);
        setFavsList(favs);
    }, []);

    return (
        <div className={styles.home}>
            <h1 className={styles.sectionTitle}>Página Inicial</h1>
            <CardH
                imagePath={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/46842895.jpg?k=7b25cb086340d88a3253c25be01012f95b3a51345ecd5fa36d08e3c0a9314dc6&o=&hp=1"}
                title={"Bem-vindo!"}
                text={"Bem-vindo ao nosso sistema de reserva de hotéis! Encontre e reserve o hotel ideal para sua próxima viagem com facilidade. Navegue pela nossa lista de hotéis e descubra opções incríveis com base em suas preferências e orçamento."}
            />

            <div className={styles.main}>
                <div className={styles.promo}>
                    <h2 className={styles.sectionTitle}>Ofertas para o fim de semana</h2>
                    <div className={styles.promoList}>
                        {promoHotels.map((hotel, index) => (
                            <div key={index} className="card">
                                <Card
                                    id={hotel.id}
                                    imagePath={hotel.imagePath}
                                    city={hotel.city}
                                    state={hotel.state}
                                    title={hotel.title}
                                    stars={hotel.note}
                                    price={hotel.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {favsList && favsList.length > 0 && (
                    <div className={styles.favs}>
                        <h2 className={styles.sectionTitle}>Seus Favoritos</h2>
                        <div className={styles.favsList}>
                            {favsList.map((fav, index) => (
                                <div key={index} className="card">
                                    <Card
                                        id={fav.id}
                                        imagePath={fav.imagePath}
                                        city={fav.city}
                                        state={fav.state}
                                        title={fav.title}
                                        stars={fav.note}
                                        price={fav.price}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.hotels}>
                    <h2 className={styles.sectionTitle}>Hotéis mais procurados</h2>
                    <div className={styles.hotelList}>
                        {hotels.map((hotel, index) => (
                            <div key={index} className="card">
                                <Card
                                    id={hotel.id}
                                    imagePath={hotel.imagePath}
                                    city={hotel.city}
                                    state={hotel.state}
                                    title={hotel.title}
                                    stars={hotel.note}
                                    price={hotel.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
