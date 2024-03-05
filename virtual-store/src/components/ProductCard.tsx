import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard( {id, title, color, price, image }) {
    return <>
    <Link to={"/product/"+id} className={styles["product-card"]}>
            <img className={styles["product-img"]} src={image} alt={id}/>
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>{title}</span>
              <span className={styles["product-description"]}>{color}</span>
              <div className={styles["product-price-block"]}>
                <span className={styles.price}>ARS${(price).toLocaleString()}</span>
                <span className={styles.discount} >50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>Incluye impuesto País y percepción AFIP</div>
            </div>
          </Link>
    </>
}

export default ProductCard;