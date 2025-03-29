import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();
export const useOrder = () => useContext(OrderContext);



function OrderProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false); //Sirve para mostrar o no el modal/side bar.
    
    const [ count, setCount ] = useState(0) // Me va a servir para mostrar la cantidad de productos en el carrito
    const [ total, setTotal ]   = useState(0) // Me va a servir para mostrar el total de la compra
    
    const [cart, setCart] = useState([]); //array de productos que se van a agregar al carrito.

    useEffect(() => {
      let contador = 0
      let total = 0

      cart.forEach((item) => {
        contador += item.quantity
        total += item.price * item.quantity
      })

      setCount(contador)
      setTotal(total)

    }, [cart]) //cada vez que cambie el carrito, se va a ejecutar el useEffect.


  function toggleCart() {
    setIsOpen(!isOpen)
  }

  function addToCart(product) {
    const productInCart = cart.find((item) => item.id === product.id)
    
    if (!productInCart) {
      product.quantity = 1  
      product.price = product.price || 0
      setCart([...cart, product])
    } else {
      productInCart.quantity += 1
      setCart([...cart])
    }
  }

  // function removeFromCart(product) {
        // Podria generar un nuevo filtrando el post a partir de su id y ese array setearlo como nuevo valor del carrito

        // Otra forma, seria generar una shallow copy del array, buscar el indice de mi post y eliminarlo con splice
  

  // function decreaseQuantity(id) {
    // Busco el post con find a partir de su id, y le decremento la cantidad en 1, dado el caso que el post tuviese solo 1 unidad, lo elimino del carrito
 
  

  return  (
  <OrderContext.Provider 
  value={{ cart,  //array de prod.
  toggleCart, //funcion para abrir y cerrar el modal/side bar.
  isOpen, //estado del carrito.
  addToCart,
  count, //cantidad de productos en el carrito.
  total, //total de la compra. 
   }}>
    {children}
    </OrderContext.Provider> 
    )
}

export default OrderProvider