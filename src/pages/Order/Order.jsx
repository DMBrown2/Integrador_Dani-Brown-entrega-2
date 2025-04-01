import { useOrder } from "../../context/OrderContext";
import "./Order.css";

export default function Order({decreaseQuantity}) {

    const { cart, total } = useOrder()

    return (
        <>
            <div className="order-container">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>IMAGEN</th>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(product => (
                                <tr key={product.id}>

                                    <td><img src={product.image} alt={product.title} style={{ width: "80px", height: "100%", objectFit: "cover" }}/></td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <div className="cantidad">
                                    <button className="btn-increase" onClick={ () => decreaseQuantity(product.id)
                                    }>−</button>
                                    <td>{product.quantity}</td>
                                    <button className="	btn-decrease" onClick={ () => decreaseQuantity(product.id)
                                    }>+</button>
                                    </div>
                                    <td>${product.quantity * product.price}</td>

                                </tr>
                            ))
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>TOTAL ${total}</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="order-buttons">
                    <button className="button">Finalizar compra</button>
                    <button className="button">Vaciar carrito</button>
                </div>
            </div>
        </>
    )
}
