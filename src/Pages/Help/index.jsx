import React, { useState } from 'react';
import Content from '../../Components/Content/Content'
import Search from './../../Components/Search/Search'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
function Help() {

    const [id, setId] = useState();
    const [order, setOrder] = useState([]);
    function findOrder(e) {
            e.preventDefault();
            const db = getFirestore();
            const item = doc(db, 'orders', order);
            getDoc(item)
            .then(snapshot =>{setId(snapshot.data())})
            .catch(err=>{console.log(err)});
        }
    const handleInputChange = (e) =>{
        setOrder((e.target.value))
    }
    return (
    <Content>
        <div className='text-center'>
            <h1>Buscá tu orden de compra</h1>
            <p>Ingresa el id de compra </p>
            <Search btn={findOrder} text={handleInputChange} />
        </div>
        {id && 
            <div>
                <ul className='text-center text-success bg-secondary bg-opacity-25 l'>
                    <li>{id.Email}</li>
                    {id.Items.map(detalle => <li className='border-top' key={detalle.id}>({detalle.quantity}) {detalle.title} ${detalle.newPrice} c/u <br />{detalle.shipp}</li>)}
                    <li className='border-top'>Total ${id.totalprice}</li>
                </ul>
            </div>}

    </Content>
    );
}

export default Help;