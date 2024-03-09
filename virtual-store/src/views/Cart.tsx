import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../components/Cart.module.css";

import Hero from "../components/Hero";

function Cart() {
    return <>
    <NavBar/>
    <Hero titulos={["Mi carrito"]}/>
    <main>
      <button className={[styles["btn-primary"], styles.discount].join(" ")} id="btn-discount">
        Aplicar 10%
      </button>
      <div className={styles["cart-container"]}>
        <div className={[styles.card, styles.resume].join(" ")}>
          <div>
            <h2>Resumen del pedido</h2>
            <div className={styles.subtotal}>
              <h3>Subtotal</h3>
              <strong className={styles.price}></strong>
            </div>
            <small>Incluye impuesto PAIS y percepción AFIP.</small>
          </div>
          <button className={styles["btn-primary"]}>Finaliza tu compra</button>
        </div>
      </div>
    </main>
    <Footer/>

    <script src="cart.js"></script>
    </>
}

export default Cart;