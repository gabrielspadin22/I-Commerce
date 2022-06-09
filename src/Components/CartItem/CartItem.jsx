import React from 'react';
import './CartItem.css'
import { useCartContext } from '../../Context/CartContextProvider';
import { Table } from 'react-bootstrap';

const CartItem = ({item}) => {
    const { deleteById, deleteByUnit, addByUnit } = useCartContext();
    return (
    <Table striped bordered hover className='s text'>
        <tbody>
            <tr className='text-center '>
                <td className="m-0 p-0 " ><img src={item.img} alt="logo" className='img' /></td>
                    <td className='p-0 text-light'>{item.title}</td>
                    <td className='p-0 d-flex text-light'>
                        <button onClick={() => deleteByUnit(item.id)} className='m-auto bg-transparent text-light border-0 px-2'>-</button>
                        <div className='text-light'>{item.quantity}</div>
                        <button onClick={() => addByUnit(item.id)} className='m-auto bg-transparent text-light border-0 px-2'>+</button>
                    </td>
                    <td className='p-0 text-light'>{item.shipp}</td>
                    <td className='p-0 m-1 text-light'>${item.newPrice} c/u</td>
                    <td className='p-0 text-light'>Total ${item.newPrice*item.quantity}</td>
                    <td className='p-0 text-light'><button onClick={() => deleteById(item.id)} className="m-auto fs-5 bg-transparent text-light border-0" ><i className="material-icons my-auto">delete</i></button></td>
                </tr>
        </tbody>
    </Table>
    );
};

export default CartItem;