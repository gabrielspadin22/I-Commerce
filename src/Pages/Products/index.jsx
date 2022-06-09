import React, { useState, useEffect} from 'react';
import Content from '../../Components/Content/Content';
import ItemList from '../../Components/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore'
import './index.css'

function Products() {
    const [products, setProducts] = useState(true);
    
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where("sold", ">", 0), orderBy("sold", "desc"));
        getDocs(q)
        .then(snapshot =>{
            setProducts(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            }))
        });
    
    },[])

    function menor() {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where("newPrice", "<", 1000000), orderBy("newPrice"));
        getDocs(q)
        .then(snapshot =>{
            setProducts(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            }))
        });
        document.getElementById('filtro').innerHTML = "Ordenar por: Menor precio";
    };

    function mayor() {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where("newPrice", ">", 0), orderBy("newPrice", "desc"));
        getDocs(q)
        .then(snapshot =>{
            setProducts(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            }))
        });
        document.getElementById('filtro').innerHTML = "Ordenar por: Mayor precio";
    };

    return (
        <>
            {products === true
            ?
            <div className='container-fluid text-center d-flex my-auto'>
                <div className='ms-auto'>
                            <div className="my-auto cube__container">
                                <div className="cube__effect">
                                    <div className="cube" >
                                        <div className="cube__img top__cube"></div>
                                        <div>
                                            <span className="cube__img style1"></span>
                                            <span className="cube__img style2"></span>
                                            <span className="cube__img style3"></span>
                                            <span className="cube__img style4"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className='ms-5 me-auto text-center'> Cargando...</div>
            </div>
            :
            <Content>
                <div className='p-1 py-5'>
                    <div className='filter-container fs-5 position-absolute'>
                        <p id='filtro'>Ordenar por: Relevancia </p>
                        <div id="select" className='opt-filter'>
                            <div onClick={menor}>Menor precio</div>
                            <div onClick={mayor}>Mayor precio</div>
                        </div>
                    </div>
                </div>
                <div className='position relative' id='filtro'></div>
                <ItemList items={products} />
            </Content>
            }
        </>
    );
}

export default Products;