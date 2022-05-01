import React, { useState } from 'react';
import './ItemList.css'
import Item from '../Item/Item'
import AddNItemToCart from '../AddNItemToCart/AddNItemToCart'
function ItemList({items, children, msj}) {

    return (
        <ul className='item_list_container' >
            {items.map((item, i) => <li key={item.id}><Item item={item}><AddNItemToCart stock={item} /></Item></li>)}
            {msj}
        {children}
        </ul>
    );
}
export default ItemList;