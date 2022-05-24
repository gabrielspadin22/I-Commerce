import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
//import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'

function ItemdetailContainer() {
    const {id} = useParams();
    const [detalle, setDetalle] = useState([])

        function getProduct(id){
            const db = getFirestore();
            const item = doc(db, 'items', id);
            return getDoc(item)
        }

        useEffect(()=>{
            getProduct(id)
            .then(snapshot =>{setDetalle({...snapshot.data(), id: snapshot.id})})
            .catch(err=>{console.log(err)});
        },[id])
        
        
    return (
        <div className='itemDetailContainerContainerForReal'>
            <ItemDetail detail={detalle}></ItemDetail> 
        </div>
    );
}

export default ItemdetailContainer;