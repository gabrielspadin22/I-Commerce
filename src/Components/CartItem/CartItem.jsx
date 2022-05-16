import React from 'react';
import './CartItem.css'
import { useCartContext } from '../../Context/CartContextProvider';

const CartItem = ({item}) => {
    const { deleteById, deleteByUnit, addByUnit } = useCartContext();
    return (
        <div className='cartItemContainer my-5'>
            <img src={item.img} alt="" className=''/>
            <h1 className='d-flex m-auto'>{item.title}</h1>
            <div className='d-flex border'>
                <button onClick={() => deleteByUnit(item.id)} className='m-auto bg-transparent text-light border-0 px-5'>-</button>
                <p className='m-auto text-light'>{item.quantity}</p>
                <button onClick={() => addByUnit(item.id)} className='m-auto bg-transparent text-light border-0 px-5'>+</button>
            </div>
            <button onClick={() => deleteById(item.id)} className="m-auto fs-5 bg-transparent text-light border rounded" ><i className="material-icons my-auto">delete</i>Eliminar todo</button>
            <small className='fs-5 text-success my-auto'>{item.shipp}</small>
            <p className='d-flex m-auto fs-5'>${item.newPrice} c/u</p>
            <p className='d-flex m-auto fs-3'>Total ${item.newPrice*item.quantity}</p>
        </div>
    );
};

export default CartItem;