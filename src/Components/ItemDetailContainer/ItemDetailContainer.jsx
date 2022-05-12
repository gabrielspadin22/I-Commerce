import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'
import './ItemDetailContainer.css'

function ItemdetailContainer() {
    const {id} = useParams();
    const [detalle, setDetalle] = useState([])
        useEffect(()=>{
            showProductsDetailsPromise.then((res)=>setDetalle(res[id]));
        },[id])
        
    return (
        <div className='itemDetailContainerContainerForReal'>
            <ItemDetail detail={detalle}></ItemDetail> 
        </div>
    );
}

export default ItemdetailContainer;