import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

/* Se agregó el atributo img al NavButton para poder hacer el logo "tiendamia" */ 

function NavButton({ title, href, img }) {
    
    const image = (img.src != "") ? <img src={img.src} width={img.width} alt={img.alt}></img> : null;

    return <>
    <Link to={href} className={styles.button}>
        {image} 
        {title}</Link>
    </>;
 }



export default NavButton;