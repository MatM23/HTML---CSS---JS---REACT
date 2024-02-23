import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./NotFound.module.css";

function NotFound() {
    return <>
    <NavBar/>
    <Hero/>
    <main>
        
        <div className="notFound">
            <div className="info-container">
                <div className="title">Error 404</div>
                <p>Página no encontrada</p>
            </div>
            <div className="image-container">
                <img src="./not-found.jpg" alt="Not found"></img>
            </div>
            
        </div>
      
    </main>
    <Footer/>
    </>
}
export default NotFound;