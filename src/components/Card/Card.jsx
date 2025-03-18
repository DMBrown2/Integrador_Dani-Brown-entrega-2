import './Card.css';

export default function Card() {
  return (
//CARD
            <article className="card">
              <div className="card-content">
                {" "}
                {/* Imagen+STATUS+ICONOS+BOTON */}
                <img
                  src="/assets/images/cards/tiempo-entre-costuras.webp"
                  alt="tiempo-entre-costuras"
                  className="card-image"
                />
                <div className="card-status">
                  <p>Nuevo!</p>
                </div>
                <div className="card-icon-container">
                  <div className="icon">
                    <i className="fa-regular fa-heart" />
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-code-compare" />
                  </div>
                  <div className="icon">
                    <a
                      href="/pages/detalle-card1/card1.html"
                      target="_blank"
                      title="Ver detalle"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                    </a>
                  </div>
                </div>
                <button className="card-add">Agregar al carrito</button>
              </div>
              <div className="card-info">
                {/* GÉNERO */}
                <h4 className="genero"> Novela Romantica </h4>
                {/* TITULO DEL LIBRO */}
                <h4 className="titulo-libro">El tiempo entre costuras</h4>
                {/* Seccion de valoraciones */}
                <div className="card-rate">
                  <div className="icon-rate">
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="card-review">(1 review)</div>
                </div>
                <div className="card-price">$50.000</div>
              </div>
            </article>
  )
}
