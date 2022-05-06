import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemdetailContainer({details}) {
    const { id } = useParams();

    console.log(details[id]) /* Puse este console log para ver que dato tira primero en el details, 
--------------------------------- y el primer valor que tiene es undefined ---------------------*/

    return (
        <div className='itemDetailContainerContainerForReal'>
            <ItemDetail detail={details /* si al details le pongo el indice que quiero o le pongo el id entre [], 
        se muestra la informacion del producto que contiene el array, pero cuando carga por primera vez la app, 
        me tira error de undefined que no se por que no lo lee al array , ya le saque el setTimeOut a las promesas 
        para ver si era eso pero me sigue tirando el mismo error*/}></ItemDetail> 
        </div>
    );
}

export default ItemdetailContainer;