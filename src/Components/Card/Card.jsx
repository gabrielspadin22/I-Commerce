import React from 'react';
import './Card.css';

function Card({children, disponible}) {
    return (
        <div className='card_container shadow1'>
            <div className='img_product_container'>
                <img className='img_product' src="../logo192.png" alt="" />
            </div>
            <div className='product_desc_container'>Átomo</div>
            <small>Logo utilizado por React</small>
            <p>$2400</p>
            <small className='shipp'>Envio gratis</small>
            <small className='stock'>({disponible} disponible)</small>
            {children}
        </div>
    );
}

export default Card;