/* /src/components/NavBar.tsx */
import "./NavBar.module.css";
import NavButton from "./NavButton";

function NavBar() {
    return <>
    <header className="header">
      <div className="container">
        <div className="search">
          <div className="logo">
            <NavButton href={"/"} title={""} img={{src: "/tiendamia-logo.svg", width:"218", alt:"Logo store"}}/>
            </div>
          <div className="form">
            <form><input type="text" placeholder="Search"/></form>
          </div>
          <div className="social">
            <ul>
              <li><a href="https://facebook.com"><img src="/facebook.png" alt="Logo social"/></a></li>
              <li><a href="https://instagram.com"><img src="/instagram.png" alt="Logo social"/></a></li>
              <li><a href="/cart"><img src="/cart.png" alt="Logo carrito"/></a></li>
            </ul>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li> <NavButton title={"Ofertas de la semana"} href={"/ofertas.html"} img={{src: ""}} /> </li>
            <li> <NavButton title={"¿Cómo comprar?"} href={"/como.html"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Costos y tarifas"} href={"/costos_tarifas.html"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Mis pedidos"} href={"/pedidos.html"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Invita y gana"} href={"/invita_gana.html"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Garantía de entrega"} href={"/garantia_entrega.html"} img={{src: ""}} /> </li>
          </ul>
        </div>
      </div>
    </header>
    </> 
}
export default NavBar;