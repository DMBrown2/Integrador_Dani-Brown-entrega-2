import './Contacto.css';

export default function Contacto() {
  return (
    <>
      <section className="section-contacto">
        <div className="titulo-form">
          <h1>Contactate con nosotros</h1>
        </div>
        <div className="form-container">
          <form className="form">
            <div className="input-group">
              <div className="input-nombre">
                <label htmlFor="NOMBRE"> Nombre y Apellido:</label>
                <input
                  type="text"
                  name="nombre"
                  id="NOMBRE"
                  placeholder="Nombre y Apellido"
                  required=""
                  minLength={4}
                  maxLength={120}
                  pattern="^[a-zA-Z ]+$"
                  autoComplete=""
                />
              </div>
              <div className="input-email">
                <label htmlFor="correo">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="correo"
                  placeholder="email"
                  required=""
                  minLength={6}
                  maxLength={150}
                  pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                />
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
                <button className="btn" type="submit">
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
