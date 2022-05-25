import React, { useState } from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import Content from '../../Components/Content/Content'
import { useCartContext } from '../../Context/CartContextProvider';
import { Link } from 'react-router-dom';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

function Cart() {
    const { cartList, emptyCart, totalPrice } = useCartContext();
    const [orderid, setOrderId] = useState([]);

    const sendOrder = () =>{
        const order = {
            buyer: {name: "Gabriel", lastname: "Padin"},
            items:cartList,
            total:totalPrice()
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => setOrderId(id) && console.log(orderid));
        console.log(cartList);
    }

    return (
        <Content>
            {cartList.map((item) =>(<CartItem key={item.id} item={item} />))}
            {cartList.length > 0 ? ( 
            <div className='border-top border rounded-3'>
                <div className='text-center fs-1 my-3 border-bottom'>Total ${totalPrice()}</div>
                <button className='mt-3 mb-5 mx-auto d-flex rounded-3 btn-secondary fs-5' onClick={()=> emptyCart()}>Vaciar carrito</button>
                <button className='my-3 mx-3 rounded-3 ms-auto d-flex text-light btn-primary fs-2 p-1' onClick={sendOrder}>Terminar compra</button>
            </div>) : 
            (<Link className='text-decoration-none text-light' to={`/products`}><div className='text-center fs-1 border rounded'>Carrito vacio</div><p className='text-center fs-5 my-3 text-decoration-underline'>Volver al inicio</p></Link>)}
        </Content>
    );
}

export default Cart;