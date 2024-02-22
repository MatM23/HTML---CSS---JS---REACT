/* /src/views/Home.tsx */
import NavBar from "../components/NavBar";
import NavButton from "../components/NavButton";

function Home() {
    return <>
    <NavBar />
    <section id="hero">
      <div className="container">
        <div className="title-container">
          <span>tecnología</span>
          <span>renovada</span>
        </div>
      </div>
    </section>
    <main>
      <div className="container">
        <div className="product-container">
          <article className="product-card">
            <img className="product-img" src="/mock1.jpg" alt="Macbook Pro"/>
            <div className="product-info">
              <span className="product-title">Macbook Pro 15'4</span>
              <span className="product-description">Space Gray</span>
              <div className="product-price-block">
                <span className="price">$750.000</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
          </article>
          <article className="product-card">
            <img className="product-img" src="/mock1.jpg" alt="Macbook Pro"/>
            <div className="product-info">
              <span className="product-title">Macbook Pro 15'4</span>
              <span className="product-description">Space Gray</span>
              <div className="product-price-block">
                <span className="price">$750.000</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
          </article>
          <article className="product-card">
            <img className="product-img" src="/mock1.jpg" alt="Macbook Pro"/>
            <div className="product-info">
              <span className="product-title">Macbook Pro 15'4</span>
              <span className="product-description">Space Gray</span>
              <div className="product-price-block">
                <span className="price">$750.000</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
          </article>
          <article className="product-card">
            <img className="product-img" src="/mock1.jpg" alt="Macbook Pro"/>
            <div className="product-info">
              <span className="product-title">Macbook Pro 15'4</span>
              <span className="product-description">Space Gray</span>
              <div className="product-price-block">
                <span className="price">$750.000</span>
                <span className="discount">50% Off</span>
                </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
              </div>
          </article>
          <article className="product-card">
            <img className="product-img" src="/mock1.jpg" alt="Macbook Pro"/>
            <div className="product-info">
              <span className="product-title">Macbook Pro 15'4</span>
              <span className="product-description">Space Gray</span>
              <div className="product-price-block">
                <span className="price">$750.000</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
          </article>
        </div>
      </div>
    </main>
    <footer>
      <div className="container">
        <div className="columns-container">
          <div className="col">
            <ul>
              <li className="col-main-item"><a href="#">Ofertas de la semana</a></li>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Audio</a></li>
              <li><a href="#">Auticulares</a></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="col-main-item"><a href="#">Cómo comprar</a></li>
              <li><a href="#">Formas de pago</a></li>
              <li><a href="#">Envios</a></li>
              <li><a href="#">Devoluciones</a></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="col-main-item"><a href="#">Costos y tarifas</a></li>
              <li><a href="#">Impuestos</a></li>
              <li><a href="#">Facturación</a></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="col-main-item"><a href="#">Mis pedidos</a></li>
              <li><a href="#">Pedir nuevamente</a></li>
              <li><a href="#">Lista de deseos</a></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="col-main-item"><a href="#">Garantía de Entrega</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Curso de HTML + CSS 2023
        </div>
      </div>
    </footer>
    </>
    }
export default Home;
