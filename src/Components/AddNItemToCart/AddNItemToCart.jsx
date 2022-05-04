import React, {useState} from 'react';
import './AddNItemToCart.css'
import Swal from 'sweetalert2';
const AddNItemToCart = ({stock, initial}) => {
    const [cont, setCount] = useState(initial);
    
function onAdd(){
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
                <button className='add_to_cart_bnt bdr_h' onClick={onAdd}><i className="material-icons">add_shopping_cart</i> Añadir al carro</button>
                <button id='resta' className='cntnt bdr_h' onClick={()=> {setCount(cont - 1);}} disabled={cont === 1}>-</button>
                <div className='cntnt'>{cont}</div>
                <button id='suma' className='cntnt bdr_h' onClick={()=> {setCount(cont + 1);}} disabled={cont === stock}>+</button>
            </div>
        </div>
    );
}
export default AddNItemToCart;