
import "./Footer.module.css";

function Footer() {
    return <>
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
export default Footer;