import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const URL = import.meta.env.VITE_API_URL

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    const { data } = await axios.get(`${URL}/users`);
    setUsuarios(data);
  };

  const eliminarUsuario = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar usuario?",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });
    if (confirm.isConfirmed) {
      await axios.delete(`${URL}/${id}`);
      obtenerUsuarios();
    }
  };

  return (
    <div>
      <h1>Usuarios Registrados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => eliminarUsuario(user.id)}><FontAwesomeIcon icon={faTrash}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
