import React, {useState, useEffect} from 'react';
import Content from '../../Components/Content/Content'
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function Categories() {
    const {categoria} = useParams();
    const [categories, setCategories] = useState(true);
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where('categoria', '==', categoria));
        getDocs(q)
        .then(snapshot =>{
            setCategories(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            }));
        })
    },[categoria])
    return (
    <>
        {categories === true
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
            <ItemList items={categories}/>
        </Content>
        }
    </>
    );
}
export default Categories;