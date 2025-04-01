import { useForm } from 'react-hook-form';
import './Contacto.css';
// import { useState, UserProvider } from "react";
// import { userContext } from "../../context/UserContext"
// import Swal from "sweetalert2";

export default function Contacto() {
  // const { agregarUsuario } = UserProvider(userContext);
  // const [nombre, setNombre] = useState("");
  // const [email, setEmail] = useState("");
  // const [mensaje, setMensaje] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!nombre || !email || !mensaje) {
  //     Swal.fire({ icon: "error", title: "Oops...", text: "Todos los campos son obligatorios" });
  //     return;
  //   }

  //   const success = await agregarUsuario({ nombre, email, mensaje });

  //   if (success) {
  //     Swal.fire({ icon: "success", title: "¡Usuario creado!", text: "Los datos se enviaron correctamente" });
  //     setNombre("");
  //     setEmail("");
  //     setMensaje("");
  //   } else {
  //     Swal.fire({ icon: "error", title: "Error", text: "Hubo un problema al registrar el usuario" });
  //   }
 

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm()

  return (
    <>
      <section className="section-contacto">
        <div className="titulo-form">
          <h1>Contactate con nosotros</h1>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="input-group">
              <div className="input-nombre">
                <label htmlFor="NOMBRE"> Nombre y Apellido:</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre y Apellido"
                  pattern="^[a-zA-Z ]+$"
                  autoComplete
                  {...register('nombre', {
                    required: {
                      value: true,
                      message: 'Campo requerido',
                    },
                    maxLength: { value: 20, message: 'Max length is 20' },
                    minLength: { value: 3, message: 'Min length is 3' },
                  })}
                />
                {errors.name && (
                  <span className="input-error">{errors.name?.message}</span>
                )}
              </div>


              <div className="input-email">
                <label htmlFor="correo">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                  autoComplete
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                    maxLength: { value: 20, message: 'Max length is 20' },
                    minLength: { value: 3, message: 'Min length is 3' },
                  })}
                />
                {errors.email && (
                  <span className="input-error">{errors.email?.message}</span>
                )}
              </div>


              <div className="input-mensaje">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  type="text"
                  name="mensaje"
                  id="mensaje"
                  rows={5}
                  required=""
                  minLength={6}
                  maxLength={150}
                  pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                  defaultValue={"                    "}
                />
              </div>

              <div className="btn-contactar">
                <button 
                className="btn" 
                type="submit"
                disabled={!isValid}>
                  Enviar
                </button>
              </div>
            </div>
          </form>
          <div className="mapa-contacto">
            <iframe
              className="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6570.197352305381!2d-58.41558026866533!3d-34.57636966616221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb579fe6a6dd5%3A0x38256ad937e5031d!2s3396%20Lafinur!5e0!3m2!1ses!2sar!4v1729781505576!5m2!1ses!2sar"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
