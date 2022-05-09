import React from 'react';
import './ItemList.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom';
function ItemList({items}) {

    return (
        <ul className='item_list_container' >
            {items.map(details => <li key={details.id}><Link to={`/products/item/${details.id}`}><Item item={details}></Item></Link></li>)}        
        </ul>
    );
}
export default ItemList;