/* /src/components/NavBar.tsx */
import styles from "./NavBar.module.css";
import NavButton from "./NavButton";

function NavBar() {
    return <>
    <header className={styles.header}>
      <div className={styles["container"]}>
        <div className={styles.search}>
          <div className={styles.logo}>
            <NavButton href={"/"} title={""} img={{src: "/tiendamia-logo.svg", width:"218", alt:"Logo store"}}/>
            </div>
          <div className={styles.form}>
            <form><input type="text" placeholder="Search"/></form>
          </div>
          <div className={styles.social}>
            <ul>
              <li><a href="https://facebook.com"><img src="/facebook.png" alt="Logo social"/></a></li>
              <li><a href="https://instagram.com"><img src="/instagram.png" alt="Logo social"/></a></li>
              <li><a href="/cart"><img src="/cart.png" alt="Logo carrito"/></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.nav}>
          <ul>
            <li> <NavButton title={"Ofertas de la semana"} href={"/on-sale"} img={{src: ""}} /> </li>
            <li> <NavButton title={"¿Cómo comprar?"} href={"/como"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Costos y tarifas"} href={"/costos-tarifas"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Mis pedidos"} href={"/pedidos"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Invita y gana"} href={"/invita-gana"} img={{src: ""}} /> </li>
            <li> <NavButton title={"Garantía de entrega"} href={"/garantia-entrega"} img={{src: ""}} /> </li>
          </ul>
        </div>
      </div>
    </header>
    </> 
}
export default NavBar;