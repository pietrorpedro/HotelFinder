import { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./Profile.module.css";

const Profile = () => {

    Modal.setAppElement("#root");

    const [hotels, setHotels] = useState([]);
    const [favs, setFavs] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentHotel, setCurrentHotel] = useState(null);
    const [message, setMessage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("hotels")) || [];
        const storageFavs = JSON.parse(localStorage.getItem("fav")) || [];
        setHotels(storage);
        setFavs(storageFavs);
    }, []);

    const openModal = (id = null) => {
        if (id) {
            const hotel = hotels.find((hotel) => hotel.id === id);
            setCurrentHotel(hotel);
            setIsEditing(true);
        } else {
            setCurrentHotel({
                title: '',
                price: '',
                imagePath: '',
                city: '',
                state: '',
            });
            setIsEditing(false);
        }
        setModalIsOpen(true);
    };

    // MDS EU NÃO AGUENTO MAIS DAR TANTO ERRO
    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentHotel(null);
    };

    const handleEdit = (updated) => {
        const updatedHotels = hotels.map((hotel) =>
            hotel.id === updated.id ? updated : hotel
        );

        localStorage.setItem("hotels", JSON.stringify(updatedHotels));
        setHotels(updatedHotels);
        closeModal();

        setMessage("Hotel editado com sucesso!");
        setTimeout(() => setMessage(null), 5000);
    };

    const handleAdd = (newHotel) => {
        const newId = Math.max(...hotels.map(hotel => hotel.id), 0) + 1;
        const updatedHotels = [...hotels, { ...newHotel, id: newId }];

        localStorage.setItem("hotels", JSON.stringify(updatedHotels));
        setHotels(updatedHotels);
        closeModal();

        setMessage("Hotel adicionado com sucesso!");
        setTimeout(() => setMessage(null), 5000);
    };

    const handleRemove = (id) => {
        const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
        localStorage.setItem("hotels", JSON.stringify(updatedHotels));
        setHotels(updatedHotels);

        const updatedFavs = favs.filter((fav) => fav.id !== id);
        localStorage.setItem("fav", JSON.stringify(updatedFavs));
        setFavs(updatedFavs);

        setMessage("Hotel removido com sucesso!");
        setTimeout(() => setMessage(null), 5000);
    };
    // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

    return (
        <div className={styles.profile}>
            <h1>Bem-vindo, Administrador.</h1>
            {message && <div className={styles.message}>{message}</div>}
            <div className={styles.addHotel}>
                <Button
                    text={"Adicionar Hotel"}
                    width={"300px"}
                    onClick={() => openModal()}
                />
            </div>
            <div className={styles.crud}>
                {hotels.map((hotel) => (
                    <div key={hotel.id} className={styles.hotel}>
                        <Card
                            id={hotel.id}
                            imagePath={hotel.imagePath}
                            city={hotel.city}
                            state={hotel.state}
                            title={hotel.title}
                            stars={hotel.note}
                            price={hotel.price}
                            actions={true}
                            onEdit={() => openModal(hotel.id)}
                            onRemove={() => handleRemove(hotel.id)}
                        />
                    </div>
                ))}
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={styles.modal}>
                <h2>{isEditing ? "Editar Hotel" : "Adicionar Novo Hotel"}</h2>
                <form
                    className={styles.modalForm}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const newHotel = {
                            title: e.target.title.value,
                            price: e.target.price.value,
                            imagePath: e.target.imagePath.value,
                            city: e.target.city.value,
                            state: e.target.state.value,
                        };
                        if (isEditing) {
                            handleEdit({ ...currentHotel, ...newHotel });
                        } else {
                            handleAdd(newHotel);
                        }
                    }}
                >
                    <label>
                        Título:
                        <input type="text" name="title" defaultValue={currentHotel?.title || ''} />
                    </label>
                    <label>
                        Preço:
                        <input type="number" name="price" defaultValue={currentHotel?.price || ''} />
                    </label>
                    <label>
                        Imagem:
                        <input type="text" name="imagePath" defaultValue={currentHotel?.imagePath || ''} />
                    </label>
                    <label>
                        Cidade:
                        <input type="text" name="city" defaultValue={currentHotel?.city || ''} />
                    </label>
                    <label>
                        Estado:
                        <input type="text" name="state" defaultValue={currentHotel?.state || ''} />
                    </label>
                    <Button
                        text={"Salvar"}
                        type={"submit"}
                    />
                    <Button
                        text={"Fechar"}
                        onClick={closeModal}
                    />
                </form>
            </Modal>
        </div>
    );
};

export default Profile;
// FINALMENTE, ESSA FOI A PARTE QUE MAIS DEMOROU