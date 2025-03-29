import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import './ProductCard.css'
import { NavLink } from 'react-router-dom'
import { useOrder } from '../../context/OrderContext'

export default function Card({product}) {

  const {addToCart} = useOrder()

  return (
//CARD
            <article className="card">
              <div className="card-content">
                {" "}
                {/* Imagen+STATUS+ICONOS+BOTON */}
                <img
                  src={product.image}
                  alt="tiempo-entre-costuras"
                  className="card-image"
                />
                <div className="card-status">
                  <p>{product.status}</p>
                </div>
                <div className="card-icon-container">
                  <div className="icon">
                    <FontAwesomeIcon icon= {faHeart} className="heart" />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faCodeCompare} className="compare" />
                  </div>
                  <div className="icon">
                    <NavLink to={`product/${product.id}`} className="link" target='_blank' title="Ver detalle">

                    <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-glass" />

                    </NavLink>
         
                  </div>
                </div>
                <button 
                className="card-add"
                onClick={() => addToCart(product)}>
                  Agregar al carrito
                  </button>
              </div>
              <div className="card-info">
                {/* GÉNERO */}
                <h4 className="genero"> {product.genre} </h4>
                {/* TITULO DEL LIBRO */}
                <h4 className="titulo-libro">El tiempo entre costuras</h4>
                {/* Seccion de valoraciones */}
                <div className="card-rate">
                  <div className="icon-rate">
                    <FontAwesomeIcon icon= {faStar} className="star" />
                    <FontAwesomeIcon icon= {faStar} className="star" />
                    <FontAwesomeIcon icon= {faStar} className="star" />
                    <FontAwesomeIcon icon= {faStar} className="star" />
                    <FontAwesomeIcon icon= {faStar} className="star" />
                    
                  </div>
                  <div className="card-review">(1 review)</div>
                </div>
                <div className="card-price">{product.price}</div>
              </div>
            </article>
  )
}
