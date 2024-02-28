import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../components/Cart.module.css";
import "../components/ToAdd.module.css";

function Cart() {
    return <>
    <NavBar/>
    <section id="hero">
      <div className="container">
        <div className="title-container">
          <span>Mi carrito</span>
        </div>
      </div>
    </section>
    <main>
      <button className="btn-primary discount" id="btn-discount">
        Aplicar 10%
      </button>
      <div className="cart-container">
        <div className="card resume">
          <div>
            <h2>Resumen del pedido</h2>
            <div className="subtotal">
              <h3>Subtotal</h3>
              <strong className="price"></strong>
            </div>
            <small>Incluye impuesto PAIS y percepción AFIP.</small>
          </div>
          <button className="btn-primary">Finaliza tu compra</button>
        </div>
      </div>
    </main>
    <Footer/>

    <script src="cart.js"></script>
    </>
}

export default Cart;