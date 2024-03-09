import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "./NotFound.module.css";

function NotFound() {
    return <>
    <NavBar/>
    <Hero/>
    <main>
        <div className={styles.notFound}>
            <div className={styles["info-container"]}>
                <div className={styles.title}>Error 404</div>
                <p>Página no encontrada</p>
            </div>
            <div className={styles["image-container"]}>
                <img src="./not-found.jpg" alt="Not found"></img>
            </div>
        </div>
    </main>
    <Footer/>
    </>
}

export default NotFound;