import React, {useState, Component, useEffect} from 'react';
import './AddNItemToCart.css'

const AddNItemToCart = ({stock}) => {
    const [cont, setCount] = useState(0);
useEffect(()=> {
    let resta = document.getElementById('resta');
    let suma = document.getElementById('suma');
    if (cont == 0) {
        resta.setAttribute("disabled", "")
    }else{
        resta.removeAttribute("disabled", "");
    };
    if (cont == stock.units) {
        suma.setAttribute("disabled", "")
    }else{
        suma.removeAttribute("disabled", "");
    }
},[cont]);
    return (
        <div className='addtocart_container'>
            <div className='addtocart_controls'>
                <button className='add_to_cart_bnt bdr_h'><i className="material-icons">add_shopping_cart</i> Añadir al carro</button>
                <button id='resta' className='cntnt bdr_h' onClick={()=> {setCount(cont - 1)}}>-</button>
                <div className='cntnt'>{cont}</div>
                <button id='suma' className='cntnt bdr_h' onClick={()=> {setCount(cont + 1)}}>+</button>
            </div>
        </div>
    );
    
}
export default AddNItemToCart;