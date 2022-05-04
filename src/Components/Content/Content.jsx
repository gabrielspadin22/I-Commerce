import './Content.css'
import React, { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import showProductsPromise from '../../Utils/ShowProducts'
import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
function Content() {
    const [products, setProducts] = useState([])
    const [details, setDetails] = useState([])
    useEffect(()=>{
        showProductsDetailsPromise.then((res)=>setDetails(res));
        showProductsPromise.then((response)=>setProducts(response));
    },[])

    return (
        <div id='content' className='content_container bg_1 shadow1'>
            <ItemList items={products} />
            <ItemDetailContainer details={details}/>
        </div>
    );
}

export default Content;