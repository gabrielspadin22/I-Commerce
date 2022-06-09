import React from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import Content from '../../Components/Content/Content'
import { useCartContext } from '../../Context/CartContextProvider';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartList, emptyCart, totalPrice } = useCartContext();
    
    return (
        <Content>
            <div>
                {cartList.map((item) =>(<CartItem key={item.id} item={item} />))}
            </div>
            
            {cartList.length > 0 ? ( 
            <div className='border-top border rounded-3'>
                <div className='text-center fs-2 my-3 border-bottom'>Total ${totalPrice()}</div>
                <button className='my-3 mx-auto d-flex rounded-3 btn-secondary fs-5 p-0' onClick={()=> emptyCart()}>Vaciar carrito</button>
                <Link to={`/checkout`}><button className='my-3 mx-auto rounded-3 d-flex text-light btn-primary fs-4 p-0'>Continuar compra</button></Link>
            </div>) : 
            (<Link className='text-decoration-none text-light' to={`/products`}><div className='text-center fs-1 border rounded'>Carrito vacio</div><p className='text-center fs-5 my-3 text-decoration-underline'>Volver al inicio</p></Link>)}
        </Content>
    );
}

export default Cart;