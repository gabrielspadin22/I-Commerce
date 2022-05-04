import React from 'react';
import './ItemDetail.css'
import AddNItemToCart from '../AddNItemToCart/AddNItemToCart';

function ItemDetail({detail}) {
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
                <li className='itemDetailBuyMargin'><AddNItemToCart initial={detail.initial} stock={detail.units}/></li>
                <li className='itemDetailWaranty itemDetailBuyMargin'><i className="material-icons">keyboard_return</i>Devolucion gratis.<small>Tenes hasta 10 dias para devolverlo</small></li>
                <li className='itemDetailWaranty itemDetailBuyMargin'><i className="material-icons">security</i>Compra protegida.<small>Tenes hasta 10 dias para devolverlo</small></li>
            </ul>
        </div>
    );
}

export default ItemDetail;