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
            <div className="btn-group p-0" role="group" >
                <button type="button" className="btn btn-outline-primary mx-auto f-auto" onClick={()=>{Add(); onAdd(cont)}}><i className="material-icons f-auto">add_shopping_cart</i> Añadir al carro</button>
                <button type="button" className="btn btn-outline-primary ms-auto " onClick={()=>{setCount(cont - 1)}} disabled={cont === 1}>-</button>
                <div className='text-light fs-2 mx-0 my-auto px-2 text-center'>{cont}</div>
                <button type="button" className="btn btn-outline-primary me-auto" onClick={()=> {setCount(cont + 1);}} disabled={cont === stock}>+</button>
            </div>
    );
}
export default AddNItemToCart;