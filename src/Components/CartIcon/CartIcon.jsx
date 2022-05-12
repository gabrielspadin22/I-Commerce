import './CartIcon.css'
import React from 'react';
import { Link } from 'react-router-dom';
function CartIcon() {
    return (
        <ul className='icons_container '>
            <li><Link className='txt_link'to={'/cart'}><i className="material-icons icon_nav hover_text_1">shopping_cart</i><small className='NitemInCart'></small></Link></li>
            <li><Link className='txt_link'to={'/profile'}><i className="material-icons icon_nav hover_text_1">account_circle</i></Link></li>
            <li><Link className='txt_link'to={'/help'}><i className="material-icons icon_nav hover_text_1">help</i></Link></li>
        </ul>
    );
}

export default CartIcon;