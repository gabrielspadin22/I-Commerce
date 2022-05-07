import './Content.css'
import React, { useState, useEffect} from 'react';
import ItemdetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import showProductsDetailsPromise from '../../Utils/ShowProductsDetails'
function Content({children}) {
    
    const [details, setDetails] = useState([])
    useEffect(()=>{
        showProductsDetailsPromise.then((res)=>setDetails(res));
    },[])

    return (
        <div id='content' className='content_container bg_1 shadow1'>
            <ItemdetailContainer details={details}/>
            {children}
        </div>
    );
}

export default Content;