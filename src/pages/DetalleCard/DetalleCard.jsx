
import { useParams } from 'react-router-dom'
import './DetalleCard.css'
import { useEffect } from 'react'


export default function DetalleCard() {
 
 
  const { id } = useParams()

  useEffect(() => {
  getDetalleCard()

 }, [])

 const getDetalleCard = async () => {
  try {
    const response = await axios.get(`${env.URL}/tienda/${id}`)
    setTimeout(() => {
      setProduct(response.data)
    }, 2000)
    
  } catch (error) {
    console.log(error)
    Swal.fire("Error")
  }

  



  return (
    <>
      <div className="detalle-card1">
        <div className="contenedor-imagen">
          <img
            className="detalle-img"
            src="/assets/images/cards/tiempo-entre-costuras.webp"
            alt="El tiempo entre costuras"
          />
          <div className="status">
            <p>Nuevo!</p>
          </div>
        </div>
        <div className="contenedor-info">
          <div className="genero">Novela romántica</div>
          <h1 className="titulo-detalle">El tiempo entre costuras</h1>
          <h2 className="precio">$50.000</h2>
          <p className="detalle-info">
            La joven modista Sira Quiroga abandona Madrid en los meses previos a la
            Guerra Civil Española, arrastrada por el amor desbocado hacia un hombre a
            quien apenas conoce. Juntos se instalan en Tánger, donde todo lo
            impensable puede hacerse realidad. Incluso la traición y el abandono
          </p>
          <select className="cant-prod" name="cant-prod" id="cant-prod">
            <option>Cantidad</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <div className="btn-comprar">
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </>
  )
}}
