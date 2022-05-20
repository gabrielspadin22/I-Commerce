import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
//import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'

function ItemdetailContainer() {
    const {id} = useParams();
    const [detalle, setDetalle] = useState([])
    
    /*    useEffect(()=>{
            showProductsDetailsPromise.then((res)=>setDetalle(res[id]));
        },[id])
    
    */

        useEffect(()=>{
            const db = getFirestore();
            const itemCollection = collection(db, 'items');
            getDocs(itemCollection)
            .then(snapshot => {setDetalle(snapshot.docs.map(doc => {return {...doc.data(), id: doc.id}})[id]);})
            .catch(err => console.log(err));
        },[id])
        
        
    return (
        <div className='itemDetailContainerContainerForReal'>
            <ItemDetail detail={detalle}></ItemDetail> 
        </div>
    );
}

export default ItemdetailContainer;