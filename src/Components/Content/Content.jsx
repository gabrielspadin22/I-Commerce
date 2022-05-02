import './Content.css'
import React, { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import showProductsPromise from '../../Utils/ShowProducts'
function Content() {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        showProductsPromise.then((response)=>setProducts(response)) 
    },[])

    return (
        <div id='content' className='content_container bg_1 shadow1'>
            <ItemList items={products} />
        </div>
    );
}

export default Content;