import React from 'react';
import './Item.css';
function Item({children, item}) {
    return (
        <div className='item_container shadow1'>
            <div className='img_product_container'>
                <img className='img_product' src={item.img} alt="" />
            </div>
            <div className='product_desc_container'>{item.title}</div>
            <small>{item.desc}</small>
            <p>${item.newPrice}</p>
            <small className='shipp'>{item.shipp}</small>
            {children}
        </div>
    );
}

export default Item;