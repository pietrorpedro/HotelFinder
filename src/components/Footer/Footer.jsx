import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
        <h1 className={styles.footerLogo}>HotelFinder</h1>
        <div className={styles.footerMenu}>
            <ul>
                <li className={styles.footerMenuLink}><Link to={"/"}>Início</Link></li>
                <li className={styles.footerMenuLink}><Link to={"/hoteis"}>Hotéis</Link></li>
                <li className={styles.footerMenuLink}><Link to={"/perfil"}>Perfil</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Footer;