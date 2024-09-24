import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Hotels.module.css";

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("hotels")) || [];
        setHotels(storage);
        setFiltered(storage);
    }, []);

    // coloquei um delay pq tava feio o filtro funcionar imediatamente,
    // sera que eles tambem colocam esse delay em outros sites??
    useEffect(() => {
        const searchHandler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(searchHandler);
        };
    }, [search]);

    useEffect(() => {
        let results = [...hotels];

        if (debouncedSearch) {
            results = results.filter(hotel =>
                hotel.title.toLowerCase().startsWith(debouncedSearch.toLowerCase())
            );
        }

        if (sortOption) {
            if (sortOption === "priceAsc") {
                results = results.sort((a, b) => a.price - b.price);
            } else if (sortOption === "priceDesc") {
                results = results.sort((a, b) => b.price - a.price);
            } else if (sortOption === "starsDesc") {
                results = results.sort((a, b) => b.note - a.note);
            } else if (sortOption === "starsAsc") {
                results = results.sort((a, b) => a.note - b.note);
            }
        }

        setFiltered(results);
    }, [debouncedSearch, sortOption, hotels]);

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
                <div>
                    <label>
                        Ordenar por
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className={styles.filter}
                        >
                            <option value="">Filtrar</option>
                            <option value="priceAsc">Menor preço até o maior</option>
                            <option value="priceDesc">Maior preço até o menor</option>
                            <option value="starsDesc">Maior classificação</option>
                            <option value="starsAsc">Pior classificação</option>
                        </select>
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
    );
};

export default Hotels;
