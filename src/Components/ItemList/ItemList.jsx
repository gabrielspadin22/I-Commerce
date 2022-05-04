import React from 'react';
import './ItemList.css'
import Item from '../Item/Item'

function ItemList({items}) {

    return (
        <ul className='item_list_container' >
            {items.map(details => <li key={details.id}><Item item={details}></Item></li>)}        
        </ul>
    );
}
export default ItemList;