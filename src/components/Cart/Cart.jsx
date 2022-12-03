import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './cart.css'
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
        {cart.length === 0 ? 
        <div className='cart'>
            <h1 className='mt-5'>Tu carrito esta vacio</h1> 
            <Link to={'/producto'}><button className='btn btn-dark'>Volver a la tienda</button></Link>
        </div>
        :
        <div className=' cart'>
            {cart.map((prod, indice) =><div key={indice} className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4 mt-2">
                <img src={prod.img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                     <h5 className="card-title">{prod.nombre}</h5>
                     <p className="card-text">Cantidad: {prod.cant}</p>
                     <p className="card-text">Precio unitario: {prod.precio} </p>
                     <p className="card-text">Subtotal: {prod.precio * prod.cant} </p>
                </div>
                <button className='btn btn-danger mb-2 mt-2' onClick={() => removeItem(prod.id)}>Eliminar producto</button>
            </div>
            
        </div>
    </div>
)}
        <div className='cartbtn'>
            <div className='total'>
                <p>Total: {totalPrice()} </p>
            </div>
            <div className='btnn'>
                <button className='btn btnn btn-danger' onClick={emptyCart}>Limpiar carrito</button>
                <Link to='/checkout'>
                    <button className='btn btnn btn-danger'>Finalizar compra</button>
                </Link>  
            </div>
            
        </div>
        </div>
        }
        </>
    );
}

export default Cart;
