import React from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import Content from '../../Components/Content/Content'
import { useCartContext } from '../../Context/CartContextProvider';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartList, emptyCart, totalPrice } = useCartContext();
console.log(cartList)
    return (
        <Content>
            {cartList.map((item) =>(<CartItem key={item.id} item={item} />))}
            {cartList.length > 0 ? ( 
            <div className='border-top border rounded-3'>
                <div className='text-center fs-1 my-3 border-bottom'>Total ${totalPrice()}</div>
                <button className='mt-3 mb-5 mx-auto d-flex rounded-3 btn-secondary fs-5' onClick={()=> emptyCart()}>Vaciar carrito</button>
                <button className='my-3 mx-3 rounded-3 ms-auto d-flex text-light btn-primary fs-2 p-1'>Terminar compra</button>
            </div>) : 
            (<Link className='text-decoration-none text-light' to={`/products`}><div className='text-center fs-1 border rounded'>Carrito vacio</div><p className='text-center fs-5 my-3'>Volver al inicio</p></Link>)}
        </Content>
    );
}

export default Cart;