import React, { useState, useEffect} from 'react';
import Content from '../../Components/Content/Content';
import ItemList from '../../Components/ItemList/ItemList';
//import showProductsPromise from '../../Utils/ShowProducts';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        getDocs(itemCollection)
        .then(snapshot => {setProducts(snapshot.docs.map(doc => {return {...doc.data(), id: doc.id}}));})
        .catch(err => console.log(err));
    },[])


    return (
        <Content>
            <ItemList items={products} />
        </Content>
        
    );
}

export default Products;