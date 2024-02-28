import "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard( {id, title, color, price, image }) {
    return <>
    <Link to={"/product/"+id} className="product-card">
            <img className="product-img" src={image} alt={id}/>
            <div className="product-info">
              <span className="product-title">{title}</span>
              <span className="product-description">{color}</span>
              <div className="product-price-block">
                <span className="price">ARS${(price).toLocaleString()}</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
          </Link>
    </>
}

export default ProductCard;