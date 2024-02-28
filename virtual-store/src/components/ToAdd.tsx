import styles from "./ToAdd.module.css";
import { useState } from "react";

function ToAdd({product}) {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    return <>
    <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
            <div>
            <span className={styles["checkout-total-label"]}>Precio unitario: ARS$ {(product.price).toLocaleString()}</span>
            </div>
            <span className={styles["checkout-total-label"]}>Subtotal:</span>
            <h2 className={styles["checkout-total-price"]} id="price">ARS$ {(product.price * quantity).toLocaleString()}</h2>
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
                <input id="input-quantity" type="number" min="1" defaultValue={quantity} onChange={(event) => setQuantity(Number(event?.target.value))} />
                <button className={styles["btn-primary"]}>Comprar</button>
            </div>
            <div className={styles.bottom}>
            <button className={button ? styles["btn-off"] : styles["btn-outline"]} id="btn-add-to-cart"
                onClick={() => setButton(!button)}> {button ? "Quitar del" : "Añadir al"} Carrito </button>
            </div>
            </div>
        </div>
        </div>
    </>
}

export default ToAdd;