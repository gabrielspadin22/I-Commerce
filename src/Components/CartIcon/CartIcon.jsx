import './CartIcon.css'
import React from 'react';

function CartIcon( {nItemsInCart} ) {
    return (
        <ul className='icons_container '>
            <li><i className="material-icons icon_nav hover_text_1">shopping_cart</i><small>{nItemsInCart}</small></li>
            <li><i className="material-icons icon_nav hover_text_1">account_circle</i></li>
            <li><i className="material-icons icon_nav hover_text_1">help</i></li>
        </ul>
    );
}

export default CartIcon;