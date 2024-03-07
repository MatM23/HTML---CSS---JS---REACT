import { Link } from "react-router-dom";
import styles from "./OnSaleCard.module.css";

function OnSaleCard({id ,image, title, price, discount}) {

    function calculatePrice(price, discount) {
        const newPrice = price - price * (discount/100);
        return newPrice.toLocaleString();
    }

    return <>
    <Link to={"/product/"+id} className={styles["product-card"]}>
        <img className={styles["product-img"]} src={image} alt="Imagen" />
        <div className={styles["product-info"]}>
            <span className={styles["product-title"]}>{title}</span>
            <span> Desde <span className={styles["previous-price"]}> $ARS{(price).toLocaleString()} </span></span>
            <div className={styles["product-price-block"]}>
            <span className={styles.price}>ARS$ {calculatePrice(price, discount)}</span>
            <span className={styles.discount}>{discount}% Off</span>
            </div>
            <div className={styles["product-tax-policy"]}>¡Comprá y pagá en pesos!</div>
        </div>
    </Link>
    </>
}

export default OnSaleCard;