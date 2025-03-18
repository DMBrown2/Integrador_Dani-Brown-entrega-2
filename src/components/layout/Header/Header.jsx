import './Header.css';

export default function Header() {
  return (
  <div className="main-header">
    {/* MENU HAMBURGUESA  */}
    <input type="checkbox" id="burger" className="input-burger" />
    <label className="burger-container" htmlFor="burger">
      <div className="burger" />
    </label>
    {/* CLAIM + LOGO + USER INFO  */}
    <div className="contenedor-logo">
      <a href="/index.html">
        <img
          className="logo"
          src="https://liberexpress.es/wp-content/uploads/2021/07/liberexpress-logo.svg"
          alt="LOGO"
        />
      </a>
    </div>
    <div className="user-info">
      <i className="fa-regular fa-user user-avatar" />
      <i className="fa-solid fa-cart-shopping cart-icon" />
    </div>
    <div className="claim-contenedor">
      <h1 className=" titulo-principal">Knowledge is</h1>
      <h2 className="palabra-resaltada">Strength.</h2>
    </div>
    <nav className="main-nav">
      <ul className="nav-list">
        {/* Enlaces del menu de navegacion */}
        <li className="nav-item">
          <a className="nav-link" href="/index.html">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/contacto/contacto.html">
            Contacto
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/Administrador/admin.html">
            Administrador
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/suscripcion/suscripcion.html">
            Me quiero subscribir!
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/nosotros/nosotros.html">
            Nosotros
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
