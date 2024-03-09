
import ColumnFooter from "./ColumnFooter";
import styles from "./Footer.module.css";

function Footer() {
    return <>
    <footer>
      <div className={styles.container}>
        <div className={styles["columns-container"]}>
          <ColumnFooter title={"Ofertas de la semana"} row1={"Laptops"} row2={"Audio"} row3={"Auriculares"}/>
          <ColumnFooter title={"¿Cómo comprar?"} row1={"Formas de pago"} row2={"Envíos"} row3={"Devoluciones"}/>
          <ColumnFooter title={"Costos y tarifas"} row1={"Impuestos"} row2={"Facturación"} row3={""}/>
          <ColumnFooter title={"Mis pedidos"} row1={"Pedir nuevamente"} row2={"Lista de deseos"} row3={""}/>
          <ColumnFooter title={"Garantía de entrega"} row1={""} row2={""} row3={""}/>
        </div>
        <div className={styles.copyright}>
          Curso de HTML + CSS 2023
        </div>
      </div>
    </footer>
    </>
}
export default Footer;