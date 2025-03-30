import { Routes, Route } from 'react-router';
import Main from './Layout/Main/Main';
import Inicio from './pages/Inicio/Inicio';
import Admin from './pages/Admin/Admin';
import Contacto from './pages/Contacto/Contacto';
import Nosotros from './pages/Nosotros/Nosotros';
import Suscripcion from './pages/Suscripcion/Suscripcion';
import Order from './pages/Order/Order';
import DetalleCard from './pages/DetalleCard/DetalleCard';
// import AdminGuard from './utils./guard/AdminGuard';


function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />

        <Route path="/" element={<Main />}>

          <Route index element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/suscripcion" element={<Suscripcion />} />
          <Route path="/nosotros" element={<Nosotros />} />

          <Route path='/products/:id' element={<DetalleCard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/admin-product"
            element={
              <AdminGuard>

                <Admin />

              </AdminGuard>
            }
          /> */}
          
          <Route path="*" element={<h1>404</h1>} />

          </Route>
      </Routes>
    </>
  )
}

export default App;