import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';
function Content({children}) {
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState([])
    
function showProducts() {
    setloading(<Spinner className='mx-auto my-5' animation="grow" variant="primary" />)
    const showProductsPromise = new Promise((resolve)=>{
        setTimeout(() => {
                resolve(setProducts(productList), setloading(" "));
        },2000);
    }) 
}

let iDProductItem = 0;
const productList = [
    {id:iDProductItem++, title:"Átomo", desc:"Logo usado por React", price:2400, shipp:"Envio gratis", img:"../logo192.png", units:4},
    {id:iDProductItem++, title:"Átomo " + iDProductItem, desc:"Logo usado por React", price:2500, shipp:" ", img:"../logo192.png", units:3},
    {id:iDProductItem++, title:"Átomo " + iDProductItem, desc:"Logo usado por React", price:2600, shipp:" ", img:"../logo192.png", units:13},
    {id:iDProductItem++, title:"Átomo " + iDProductItem, desc:"Logo usado por React", price:2700, shipp:"Envio gratis", img:"../logo192.png", units:46},
    {id:iDProductItem++, title:"Átomo " + iDProductItem, desc:"Logo usado por React", price:2700, shipp:"Envio gratis", img:"../logo192.png", units:46},
    {id:iDProductItem++, title:"Átomo " + iDProductItem, desc:"Logo usado por React", price:2700, shipp:"Envio gratis", img:"../logo192.png", units:46},
]


    return (
        <div id='content' className='content_container bg_1 shadow1'>
            <button className='add_to_cart_bnt hover_text_1' onClick={showProducts}>Mostrar productos</button>
            <ItemList items={products} children={loading}/>
            {children}
        </div>
    );
}

export default Content;