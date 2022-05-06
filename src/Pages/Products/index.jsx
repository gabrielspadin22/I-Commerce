import React, { useState, useEffect} from 'react';
import Content from '../../Components/Content/Content';
import ItemList from '../../Components/ItemList/ItemList';
import showProductsPromise from '../../Utils/ShowProducts'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        showProductsPromise.then((response)=>setProducts(response));
    },[])

    return (
        <Content>
            <ItemList items={products} />
        </Content>
        
    );
}

export default Products;