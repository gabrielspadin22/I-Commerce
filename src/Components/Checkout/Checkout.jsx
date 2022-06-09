import React, { useState } from 'react';
import Content from '../Content/Content';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContextProvider';
import Swal from 'sweetalert2';
import './Checkout.css';
import { Link } from 'react-router-dom';

function Checkout( ) {
    const date = new Date();
    const { cartList, totalPrice, emptyCart } = useCartContext();
    const tp = totalPrice();
    const [flag, setF] = useState();
    const [orderid, setOrderId] = useState({
        Name:'', Email:'', Phone:'', Items: cartList, totalprice: tp, date: date
    });
    const sendOrder = (e) =>{
        e.preventDefault()
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, orderid)
        .then(({id}) => setF(id));
        emptyCart();
    }
    const handleInputChange = (e) =>{
        setOrderId(({...orderid,[e.target.name]:e.target.value}))
    }
    function copy(){
        var r = document.createRange();
        r.selectNode(document.getElementById("copy"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Codigo copiado',
            showConfirmButton: false,
            timer: 1000
        })
        }

    return (
        <div>
            <Content>
                {!flag &&
                    <div className='container-fluid text-center p-5'>
                        <h1>Completa tus datos para finalizar la compra</h1>
                        <div className='d-flex'>
                            <form className='col'>
                                <input required onChange={handleInputChange} type="text" name="Name" placeholder='Ingresa tu nombre' className='text-center rounded-pill border m-auto row my-5'/>
                                <input required onChange={handleInputChange} type="email" name="Email" placeholder='Email' className='text-center rounded-pill border m-auto row my-5'/>
                                <input required onChange={handleInputChange} type="number" name="Phone" placeholder='Telefono' className='text-center rounded-pill border m-auto row my-5'/>
                                <input type="submit" value="Finalizar Compra" className='btn btn-primary m-auto fs-3' onClick={sendOrder}/>
                            </form>
                        </div>
                    </div>}
                {flag &&
                    <div>
                        <ul className='m-0 p-0'>
                            <li className='list-group-item bg-transparent text-light fs-1 text-center'>Compra finalizada!</li>
                            <li className='list-group-item bg-transparent text-light fs-1 text-center'>Genial {orderid.Name}, tu compra se realizo con exito</li>
                            <li className='list-group-item bg-transparent text-light text-center p-0 m-0'>Tu id de compra es: <span className='fs-3 text-primary text-center' id='copy'>{flag}</span><i id='copy' className="material-icons mx-1 btn fs-2 text-light" onClick={copy}>content_copy</i></li>
                            <li className='list-group-item bg-transparent text-light text-center'><Link className='btn btn-secondary'to={'/products'}>Realizar otra compra</Link></li>
                        </ul>
                    </div>}
                </Content>
        </div>
    );
}

export default Checkout;