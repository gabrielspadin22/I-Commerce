import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './ItemDetailContainer.css'

function ItemdetailContainer() {
    const {id} = useParams();
    const [detalle, setDetalle] = useState(true)

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
        <>
            {detalle === true 
                ?
            <div className='container-fluid text-center d-flex my-auto'>
            <div className='ms-auto'>
                        <div className="my-auto cube__container">
                            <div className="cube__effect">
                                <div className="cube" >
                                    <div className="cube__img top__cube"></div>
                                    <div>
                                        <span className="cube__img style1"></span>
                                        <span className="cube__img style2"></span>
                                        <span className="cube__img style3"></span>
                                        <span className="cube__img style4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className='ms-5 me-auto text-center'> Cargando...</div>
            </div>
                :
                <div className='itemDetailContainerContainerForReal text-center'>
                    <ItemDetail detail={detalle} className='m-auto'></ItemDetail> 
                </div>}
        </>
    );
}

export default ItemdetailContainer;