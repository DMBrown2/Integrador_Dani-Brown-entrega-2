import { Routes, Route, NavLink } from 'react-router';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Main from './components/layout/Main/Main';
import './App.css';
import Admin from './pages/Admin/Admin';
import Contacto from './pages/Contacto/Contacto';
import DetalleCard from './pages/DetalleCard/DetalleCard';
import Nosotros from './pages/Nosotros/Nosotros';
import Suscripcion from './pages/Suscripcion/Suscripcion';
// import AdminGuard from './utils./guard/AdminGuard';


export default function App() {
  const userRole = "admin";


  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={`header-link '${({ isActive }) => isActive ? 'active' : ''}`}>Inicio</NavLink>
            </li>
            {userRole === "admin" && (
              <li>
                <NavLink className="header-link" to="/admin-product">Administrador</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/contact" className={`header-link '${({ isActive }) => isActive ? 'active' : ''}`}>Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={`header-link '${({ isActive }) => isActive ? 'active' : ''}`}>Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={`header-link '${({ isActive }) => isActive ? 'active' : ''}`}>Suscripción</NavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <Main>
        <h1>PAGINAS</h1>
        <Routes>
          <Route path="/" exact element={<h1>Inicio</h1>} />

          {/* <Route path="/admin-product"
            element={
              <AdminGuard>

                <Admin />

              </AdminGuard>
            }
          /> */}

          <Route path="/contact" element={<Contacto />} />

          <Route path="/about" element={<Nosotros />} />

          <Route path="/register" element={<Suscripcion />} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>

      </Main>

      <Footer />

    </>
  )
}
