import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard( {id, title, color, price, image, onSale }) {

    function calculatePrice(price, discount, onSale) {
      let newPrice : number;
      if(onSale) {
        newPrice = price - price * (discount/100);
      } else {
          newPrice = price;
        }
      return newPrice.toLocaleString();
    }

    return <>
    <Link to={"/product/"+id} className={styles["product-card"]}>
            <img className={styles["product-img"]} src={image} alt={id}/>
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>{title}</span>
              <span className={styles["product-description"]}>{color}</span>
              <div className={styles["product-price-block"]}>
                <span className={styles.price}>ARS${calculatePrice(price, 25, onSale)}</span>
                <span className={styles.discount}> {onSale ? "25%" : ""}</span>
              </div>
              <div className={styles["product-tax-policy"]}>Incluye impuesto País y percepción AFIP</div>
            </div>
          </Link>
    </>
}

export default ProductCard;