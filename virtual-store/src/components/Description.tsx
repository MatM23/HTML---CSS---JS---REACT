import styles from "./Description.module.css";

function Description({product}) {
    return <>
    <div className={styles["product-description-block"]}>
            <h1 className={styles.title} id="title">
              {product.title}
            </h1>
            <form className={styles.selector}>
              <fieldset>
                <label className={styles.label} htmlFor="color">Color</label>
                <select>
                {product.colors.map(each=><option key={each.toString()} value={each}>{each}</option>)}
                </select>
              </fieldset>
              <fieldset>
                <label className={styles.label} htmlFor="size">Tamaño</label>
                <select>
                  <option hidden>Seleccione un tamaño</option>
                  <option value="a">Mediano</option>
                  <option value="a">Grande</option>
                </select>
              </fieldset>
            </form>
            <div className={styles.description}>
              <span className={styles.label}>Descripción</span>
              <p id="description">
                {product.description}
              </p>
            </div>
          </div>
    </>
}

export default Description;