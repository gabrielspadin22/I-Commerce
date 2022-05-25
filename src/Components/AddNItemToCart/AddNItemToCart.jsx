import React, {useEffect, useState} from 'react';
import './AddNItemToCart.css'
import Swal from 'sweetalert2';
const AddNItemToCart = ({stock, initial, onAdd}) => {
    
    const [cont, setCount] = useState(null);
    useEffect(()=>{
        setCount(initial);
    },[initial])
    
    function Add(){
        let resp;
        cont === 1 ? resp=`añadio ${cont} producto al carrito` : resp=`añadieron ${cont} productos al carrito`;
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Se ${resp}`,
        showConfirmButton: false,
        timer: 1200
    })}

    return (
        <div className='addtocart_container'>
            <div className='addtocart_controls'>
                <button className='add_to_cart_bnt bdr_h' onClick={()=>{Add(); onAdd(cont)}}><i className="material-icons">add_shopping_cart</i> Añadir al carro</button>
                <button id='resta' className='cntnt bdr_h' onClick={()=> {setCount(cont - 1);}} disabled={cont === 1}>-</button>
                <div className='cntnt'>{cont}</div>
                <button id='suma' className='cntnt bdr_h' onClick={()=> {setCount(cont + 1);}} disabled={cont === stock}>+</button>
            </div>
        </div>
    );
}
export default AddNItemToCart;