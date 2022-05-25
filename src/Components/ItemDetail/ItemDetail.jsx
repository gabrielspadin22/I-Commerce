import React, { useState } from 'react';
import './ItemDetail.css'
import AddNItemToCart from '../AddNItemToCart/AddNItemToCart';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContextProvider';

function ItemDetail({detail}) {
    const { addToCart } = useCartContext();
    const [nProductsInCart, setnProductsInCart] = useState(0);

    function addToCartbtn(nProductsToAdd) {
        setnProductsInCart(nProductsToAdd);
        addToCart(detail , nProductsToAdd);
    };
    let r="";
    nProductsInCart > 1 ? r = "items" : r = "item";
    return (
        <div className='itemDetailContainer'>
            <ul className='itemDetailImg'>
                <li><img src={detail.img} alt="itemLogo" /></li>
                <li className='itemDetailDescription'>{detail.desc}</li>
            </ul>
            <ul className='itemDetailInfo'>
                <li className='itemdetailtadistics'><small>Nuevo | {detail.sold} vendidos</small></li>
                <li><h1 className='itemDetailTitle'>{detail.title}</h1></li>
                <li><i className="material-icons itemDetailRate">star star star star star_half</i></li>
                <li className='itemDetailOldPrice'>${detail.oldPrice}</li>
                <li className='itemDetailDiscount'>{detail.discount}% OFF</li>
                <li className='itemDetailNewPrice'>${detail.newPrice}</li>
                <li className='itemdetailpecs'>Tamaño:<small> {detail.size}</small></li>
                <li className='itemdetailpecs'>Resolucion:<small> {detail.resol}</small></li>
                <li className='itemdetailpecs'>Color:<small> {detail.color}</small></li>
                <li className='itemdetailpecs'>Profundidad de color:<small> {detail.bpp}bpp</small></li>
                <li className='itemdetailpecs'>Formato:<small> {detail.type}</small></li>
                <li className='itemDetailHashtag'>#Logos</li>
            </ul>
            <ul className='itemDetailBuy'>
                <li className='itemdetailhipping itemDetailBuyMargin green'><i className="material-icons">local_shipping</i> {detail.shipp}</li>
                <li className='itemdetailhipping itemDetailBuyMargin green'><i className="material-icons ">store</i> Retirar gratis en correos y otros puntos</li>
                <li className='itemdetailtockAvalible '>Stock disponible:</li>
                <li className='itemdetailtockAvalible '>{detail.units} disponibles</li>
                <li className='itemDetailBuyMargin'>
                    {nProductsInCart ? <button className='add_to_cart_bnt bdr_h ' ><Link className='txt_link' to='/cart'>Terminar compra ({nProductsInCart}) {r} </Link></button> :
                    <AddNItemToCart initial={detail.initial} stock={detail.units} onAdd={addToCartbtn}/> }
                </li>
                <li className='itemDetailWaranty itemDetailBuyMargin'><i className="material-icons">keyboard_return</i> Devolucion gratis.<small>Tenes hasta 10 dias para devolverlo</small></li>
                <li className='itemDetailWaranty itemDetailBuyMargin'><i className="material-icons">security</i><small> Compra protegida por dungaleta secure</small></li>
            </ul>
        </div>
    );
}

export default ItemDetail;