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
    return (
        <div className="cardborder m-3 p-2 bg-secondary bg-opacity-25 rounded">
            <div className="row g-0 m-2">
                <div className="col-md-4 m-auto p-3">
                    <img src={detail.img} className="img-fluid" alt="producto" />
                    <p className="card-text my-3 text-center">{detail.desc}</p>
                </div>
                <div className="col-md-4 m-auto">
                    <div className="card-body px-1 py-0">
                        <h5 className="card-title m-0">Nuevo | {detail.sold} vendidos</h5>
                        <p className="card-text m-0 fs-1">{detail.title}</p>
                        <p className="card-text m-0"><small><i className="material-icons itemDetailRate">star star star star star_half</i></small></p>
                        <p className="card-text fs-5 m-0 text-decoration-line-through">${detail.oldPrice}</p>
                        <p className="card-text text-success fs-5 m-0">{detail.discount}% OFF</p>
                        <p className="card-text fs-2 m-0">${detail.newPrice}</p>
                        <p className="fs-5 m-auto">Tamaño:<small> {detail.size}</small></p>
                        <p className="fs-5 m-auto">Resolucion:<small> {detail.resol}</small></p>
                        <p className="fs-5 m-auto">Color:<small> {detail.color}</small></p>
                        <p className="fs-5 m-auto">Profundidad de color:<small> {detail.bpp}bpp</small></p>
                        <p className="fs-5 m-auto">Formato:<small> {detail.type}</small></p>
                        <p className="fs-5 my-1"><small>#Logos</small></p>
                    </div>
                </div>
                <div className="col m-auto">
                    <div className="card-body row py-0 px-3">
                        <p className="card-text text-success fs-5 my-3"><i className="material-icons">local_shipping</i> {detail.shipp}</p>
                        <p className="card-text text-success fs-5 my-3"><i className="material-icons">store</i> Retirar gratis en correos y otros puntos</p>
                        <p className="card-text fs-5 my-3">Stock disponible: {detail.units}</p>
                        {nProductsInCart ?
                        <>
                            <AddNItemToCart initial={detail.initial} stock={detail.units} onAdd={addToCartbtn}/>
                            <button type="button" className="btn btn-outline-primary mx-auto my-2" ><Link className='txt_link text-light text-center mx-auto' to='/cart'>Terminar compra</Link></button>
                        </>
                        :
                        <AddNItemToCart initial={detail.initial} stock={detail.units} onAdd={addToCartbtn}/>}
                        <p className="card-text fs-5 my-2"><i className="material-icons">keyboard_return</i> Devolucion gratis.<small>Tenes hasta 10 dias para devolverlo</small></p>
                        <p className="card-text fs-5"><i className="material-icons">security</i><small> Compra protegida por dungaleta secure</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;