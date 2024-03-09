import styles from "./ToAdd.module.css";
import { useState } from "react";

function ToAdd({product}) {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);

    function addToCart({description, title, price, images, onsale}) {
        const chosenQuantity = Number(quantity);
        const product = {
            quantity: chosenQuantity,
            description,
            title,
            price: (onsale) ? (price - (0.25 * price)) : price,
            images,
            onsale
        };
    
        const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        
        const titles = cart.map((item) => item?.title);
        const isInCart = titles.includes(title);
    
        if (isInCart) {
        const newCart = cart.map((item) => {
        if (item.title === title) {
            return {
            ...item,
            quantity: item.quantity + quantity
        };
        } else {
            return item;
        }
        });
    
        localStorage.setItem("cart", JSON.stringify(newCart));
        } else {
            localStorage.setItem("cart", JSON.stringify([...cart, product]));
        }
    
    }

    function removeFromTheCart({title}) {
        const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        cart.map((item, index) => {
            if (item.title === title) {
                cart.splice(index, 1);
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function calculatePrice(price, discount, onSale) {
        let newPrice : number;
        if(onSale) {
          newPrice = price - price * (discount/100);
        } else {
            newPrice = price;
          }
        return newPrice;
      }
    const discountPrice = calculatePrice(product.price, 25, product.onsale);
    return <>
    <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
            <div>
            <span className={styles["checkout-total-label"]}>Precio {(product.onsale) ? "con descuento:" : "unitario:"} ARS$ {discountPrice.toLocaleString()}</span>
            </div>
            <span className={styles["checkout-total-label"]}>Subtotal:</span>
            <h2 className={styles["checkout-total-price"]} id="price">ARS$ {(discountPrice * quantity).toLocaleString()}</h2>
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
                onClick={() => {
                    setButton(!button);
                    if (button === false) {
                        addToCart(product);
                    } else {
                        removeFromTheCart(product);
                    }
                }}> {button ? "Quitar del" : "Añadir al"} Carrito </button>
            </div>
            </div>
        </div>
        </div>
    </>
}

export default ToAdd;