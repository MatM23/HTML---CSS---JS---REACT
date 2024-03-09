import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../components/Cart.module.css";

import Hero from "../components/Hero";
import { useState } from "react";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const [finalPrice, setFinalPrice] = useState(renderTotalPrice(cart))
  
  function renderTotalPrice(cart) {
    return formatPrice(
      cart.reduce((total, { price, quantity }) => total + price * quantity, 0)
    );
  }
  
  function formatPrice(price) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(price);
  }
    return <>
    <NavBar/>
    <Hero titulos={["Mi carrito"]}/>
    <main>
      <button className={[styles["btn-primary"], styles.discount].join(" ")}  id="btn-discount">
        Aplicar 10%
      </button>
      <div className={styles["cart-container"]}>
        <div className={[styles.card, styles.products].join(" ")}>
        {cart.map((product, index) => 
          <article key={index} className={styles["product-cart"]}>
            <img src={product.images[0]} alt={product.title}/>
            <div className={styles.middle}>
              <div className={styles.info}>
                <strong className={styles.title}></strong>
                <span className={styles.description}>{product.description}</span> 
              </div>
              <input type="number" min={1} defaultValue={product.quantity} onChange={(event) => 
              {cart[index].quantity = Number(event.target.value);
                localStorage.setItem("cart", JSON.stringify(cart))
                setFinalPrice(renderTotalPrice(cart));
               }}/>
            </div>
            <strong className={styles.price}> AR$ {formatPrice(product.price)}  </strong>
          </article>
        )}
        </div>
        <div className={[styles.card, styles.resume].join(" ")}>
          <div>
            <h2>Resumen del pedido</h2>
            <div className={styles.subtotal}>
              <h3>Subtotal</h3>
              <strong className={styles.price}> {finalPrice} </strong>
            </div>
            <small>Incluye impuesto PAIS y percepción AFIP.</small>
          </div>
          <button className={styles["btn-primary"]}>Finaliza tu compra</button>
        </div>
      </div>
    </main>
    <Footer/>
    </>
}

export default Cart;