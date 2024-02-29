import { useState } from "react";
import styles from "./Thumbs.module.css";

function Thumbs({product}) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    return <>
    <div>
        <div className={styles["product-images-block"]}>
        {product.images.map(each => 
            <div key={each.toString()} className={styles["thumbnail-container"]}>
            <img className={styles.thumbnail} src={each} alt="Imagen"
            onClick={() => setSelectedImage(each)} />
            </div> )}
        </div>
        </div>
        <div className={styles["thumbnail-container"]}>
        <img id={styles["selected-thumbnail"]} src={selectedImage} alt="" />
        </div>
    </>
}

export default Thumbs;