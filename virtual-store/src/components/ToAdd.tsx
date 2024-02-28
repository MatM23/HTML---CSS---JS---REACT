import styles from "./ToAdd.module.css";

function ToAdd({product}) {
    return <>
    <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
            <span className={styles["checkout-total-label"]}>Total:</span>
            <h2 className={styles["checkout-total-price"]} id="price">ARS$ {product.price}</h2>
            <p className={styles["checkout-description"]}>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 haciendo la solicitud en AFIP.
            </p>
            <ul className={styles["checkout-policy-list"]}>
            <li>
                <span className={styles["policy-icon"]}
                ><img src="/truck.png" alt="Truck"
                /></span>
                <span className={styles["policy-desc"]}
                >Agrega el producto al carrito para conocer los costos de
                envío</span
                >
            </li>
            <li>
                <span className={styles["policy-icon"]}
                ><img src="/plane.png" alt="Plane"
                /></span>
                <span className={styles["policy-desc"]}
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
                >
            </li>
            </ul>
            <div className={styles["checkout-process"]}>
            <div className={styles.top}>
                <input id="input-quantity" type="number" value="1" min="1" />
                <button className={styles["btn-primary"]}>Comprar</button>
            </div>
            <div className={styles.bottom}>
                <button className={styles["btn-outline"]} id="btn-add-to-cart">
                Añadir al Carrito
                </button>
            </div>
            </div>
        </div>
        </div>
    </>
}

export default ToAdd;