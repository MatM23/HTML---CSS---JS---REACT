import styles from "./Hero.module.css";

function Hero({titulos}) {
    return <>
    <section id={styles.hero}>
      <div className={styles.container}>
        <div className={styles["title-container"]}>
          {titulos.map((each) => 
            <span>{each}</span>
          )}
        </div>
      </div>
    </section>
    </>
}
export default Hero;