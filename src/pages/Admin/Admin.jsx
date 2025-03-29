import './Admin.css'
import Header from '/src/layout/Header/Header'
import Footer from '/src/layout/Footer/Footer'

export default function Admin() {
  return (
    <>
      <main>
        <div className="titulo-descripcion">
          <h1 className="titulo-admin">Administrador</h1>
          <p>Hay un total de X productos</p>
        </div>
        <div className="botones">
          <div className="btn-sumar-status">
            <button>Agregar status</button>
          </div>
          <div className="btn-sumar-producto">
            <button>Agregar producto</button>
          </div>
        </div>
        <div className="table-responsive">
          <table border={1} className="admin-table">
            {/* Cabecera de la tabla */}
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Género</th>
                <th>Status</th>
                <th>Precio</th>
                <th>Comentarios</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {/* Cuerpo de la tabla */}
              {/* =========== */}
              {/* FILA 1 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tiempo-entre-costuras.webp"
                    alt="Tiempo entre costuras"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">El tiempo entre costuras</td>
                <td className="genero-cell">Novela romántica</td>
                <td className="status-cell">Nuevo</td>
                <td className="precio-cell">$50.000</td>
                <td className="coment-cell">
                  Vendió bien, reponer stock si se acaba.
                </td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 2 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-2.jpg"
                    alt="Harry Potter y la cámara secreta"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">Harry Potter y la cámara secreta</td>
                <td className="genero-cell">Ficción</td>
                <td className="status-cell">Best seller!</td>
                <td className="precio-cell">$75.000</td>
                <td className="coment-cell">Siempre tener en stock.</td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 3 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-3.webp"
                    alt="El resplandor"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">El resplandor</td>
                <td className="genero-cell">Terror</td>
                <td className="status-cell">Best seller!</td>
                <td className="precio-cell">$40.000</td>
                <td className="coment-cell">Siempre tener en stock.</td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 4 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-4.webp"
                    alt="Cuentos de otoño"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">Cuentos de otoño</td>
                <td className="genero-cell">Cuentos</td>
                <td className="status-cell">------</td>
                <td className="precio-cell">$10.000</td>
                <td className="coment-cell">No vendió bien, no reponer.</td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 5 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-5.jpg"
                    alt="Bestiario"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">Bestiario</td>
                <td className="genero-cell">Cuentos</td>
                <td className="status-cell">Clasico</td>
                <td className="precio-cell">$25.000</td>
                <td className="coment-cell">
                  Tiene poco movimiento, reponer poca cantidad.
                </td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 6 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-6.jpg"
                    alt="El príncipe"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">El príncipe</td>
                <td className="genero-cell">No-ficción</td>
                <td className="status-cell">Clásico</td>
                <td className="precio-cell">$50.000</td>
                <td className="coment-cell">Reponer para el back to school.</td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 7 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-7.jpg"
                    alt="Corazón descalzo"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">Corazón descalzo</td>
                <td className="genero-cell">Novela romántica</td>
                <td className="status-cell">Best seller!</td>
                <td className="precio-cell">$70.000</td>
                <td className="coment-cell">
                  No reponer, a nuestra comunidad no le gustó.
                </td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* =========== */}
              {/* FILA 8 */}
              {/* =========== */}
              <tr>
                <td className="image-cell">
                  <img
                    src="/assets/images/cards/tapa-8.jfif"
                    alt="El cazador de destinos"
                    className="table-image"
                  />
                </td>
                <td className="name-cell">El cazador de destinos</td>
                <td className="genero-cell">Novela romántica</td>
                <td className="status-cell">Nuevo!</td>
                <td className="precio-cell">$30.000</td>
                <td className="coment-cell">
                  Vendió bien, reponer stock si se acaba.
                </td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button className="btn">
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
