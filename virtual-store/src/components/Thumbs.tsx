import styles from "./Thumbs.module.css";

function Thumbs({product}) {
    return <>
    <div>
        <div className={styles["product-images-block"]}>
        {product.images.map(each => 
            <div className={styles["thumbnail-container"]}>
            <img className={styles.thumbnail} src={each} alt="Imagen" />
            </div> )}
        </div>
        </div>
        <div className={styles["thumbnail-container"]}>
        <img id={styles["selected-thumbnail"]} src={product.images[0]} alt="" />
        </div>
    </>
}

export default Thumbs;