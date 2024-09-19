import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const [headerOpen, setHeaderOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        if (headerOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        }
    }, [headerOpen, darkMode]);

    function handleHeaderOpen() {
        setHeaderOpen(!headerOpen);
    }

    function handleChangeTheme() {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className={styles.header}>
            <h1 className={styles.headerLogo}>LOGO</h1>
            <img onClick={handleHeaderOpen} className={styles.headerButton} src="../assets/menu.png" />
            <div className={`${styles.headerContent} ${headerOpen ? styles.open : ''}`}>
                <ul className={styles.headerNav}>
                    <h1>LOGO</h1>
                    <li className={styles.navLink}><Link to={"/"}>Início</Link></li>
                    <li className={styles.navLink}><Link to={"/hoteis"}>Hoteis</Link></li>
                    <li className={styles.navLink}><Link to={"/perfil"}>Perfil</Link></li>
                    <li>
                        <img
                            className={styles.theme}
                            src="../assets/theme.png"
                            onClick={handleChangeTheme}
                            alt="Trocar tema"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
