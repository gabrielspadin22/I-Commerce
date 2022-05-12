import React, {useState, useEffect} from 'react';
import Content from '../../Components/Content/Content'
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'

function Categories() {
    const {categoria} = useParams();
    const [cate, setcate] = useState([])
        useEffect(()=>{
            showProductsDetailsPromise.then((res)=>setcate(res));
        },[categoria])
    const categoryFiltered = cate.filter(p => p.categoria === categoria)
    return (
    <Content>
        <ItemList items={categoryFiltered}/>
    </Content>
    );
}

export default Categories;