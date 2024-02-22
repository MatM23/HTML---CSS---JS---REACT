/* /src/views/Home.tsx */
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
    return <>
    <NavBar/>
    <Hero/>
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
    <Footer/>
    </>
    }
export default Home;
