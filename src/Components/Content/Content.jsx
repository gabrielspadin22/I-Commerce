import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
function Content({children}) {


let [is, setCount] = useState(false);


useEffect(()=>{
        const showProductsPromise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (is) {
                    resolve(alert('Aca deberian mostrarse los productos del itemList en el Content.jsx'));
                }
            }, 2000);
        })
},[is]);



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
            <button onClick={()=>{setCount(is = true)}}>Cambiar estado a true</button>
            <button onClick={()=>{setCount(is = false)}}>Cambiar estado a false</button>
            <ItemList items={productList}/>
            {children}
        </div>
    );
}

export default Content;