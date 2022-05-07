import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemdetailContainer({details}) {

    return (
        <div className='itemDetailContainerContainerForReal'>
            {details.map(detail => <li key={detail.id}><ItemDetail detail={detail}></ItemDetail></li>)}
        </div>
    );
}

export default ItemdetailContainer;