import React from 'react';
import './ItemList.css'
import Item from '../Item/Item'
import AddNItemToCart from '../AddNItemToCart/AddNItemToCart'
function ItemList({items, children}) {

    return (
        <ul className='item_list_container' >
            {items.map((item, i) => <li key={item.id}><Item item={item}><AddNItemToCart stock={item.units} initial={item.initial}/></Item></li>)}
        {children}
        </ul>
    );
}
export default ItemList;