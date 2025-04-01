// import { createContext, useState, UserContext } from "react";
// import axios from "axios";

// const UserContext = createContext();
// export const useOrder = () => UserContext(OrderContext);


// function UserProvider({ children }) {

//   const [users, setUsers] = useState([]);

//   const agregarUsuario = async (nuevoUsuario) => {
//     try {
//       const response = await axios.post(`${URL}/users`, nuevoUsuario);

//       setUsers([...users, response.data]); // Agrega el usuario a la lista

//       return true;
//     } catch (error) {
//       console.error("Error al registrar usuario:", error);
//       return false;
//     }
//   };

//   return (
//     <UserContext.Provider value={{ users, agregarUsuario }}>
//       {children}
//     </UserContext.Provider>
//   );
// };



