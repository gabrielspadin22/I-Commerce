import React, { useState, useEffect} from 'react';
import Content from '../../Components/Content/Content';
import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'
import ItemdetailContainer from '../../Components/ItemDetailContainer/ItemDetailContainer';

function ProductDetails() {
        const [details, setDetails] = useState([])
        useEffect(()=>{
            showProductsDetailsPromise.then((res)=>setDetails(res));
        },[])
    return (
        <Content>
            <ItemdetailContainer details={details} />
        </Content>
    );
}

export default ProductDetails;