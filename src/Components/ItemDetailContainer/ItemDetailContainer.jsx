import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemdetailContainer({details}) {

    return (
        <div className='itemDetailContainerContainerForReal'>
            {details.map(item => <li key={`desc${item.id}`}><ItemDetail detail={item}></ItemDetail></li>)} 
        </div>
    );
}

export default ItemdetailContainer;