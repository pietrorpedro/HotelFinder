import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import styles from "./Hotels.module.css";

const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    const [search, setSearch] = useState(null);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("hotels")) || [];
        setHotels(storage);
        setFiltered(storage);
    }, [hotels, search])

    useEffect(() => {
        if (search) {
            const results = hotels.filter(hotel =>
                hotel.title.toLowerCase().startsWith(search.toLowerCase())
            );
            setFiltered(results);
        } else {
            setFiltered(hotels);
        }
    }, [search, hotels])

    return (
        <div className={styles.hotels}>
            <h2 className={styles.sectionTitle}>Hotéis mais procurados</h2>
            <form className={styles.search}>
                <div>
                    <label>
                        Procurar Hotel
                        <input
                            type="text"
                            placeholder="Procurar hotel"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </label>
                </div>
            </form>
            <div className={styles.hotelList}>
                {filtered.map((hotel) => (
                    <div key={hotel.id} className="card">
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
    )
}

export default Hotels;