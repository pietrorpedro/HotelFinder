import styles from "./MainLayout.module.css";

import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div className={styles.wrapper}>
            <header>
                <Header/>
            </header>
            <main className={styles.mainLayout}>
                <Outlet/>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default MainLayout;