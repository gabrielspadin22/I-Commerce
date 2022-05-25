import React, {useState, useEffect} from 'react';
import Content from '../../Components/Content/Content'
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function Categories() {

    const {categoria} = useParams();
    const [categories, setCategories] = useState([]);

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
    <Content>
        <ItemList items={categories}/>
    </Content>
    );
}

export default Categories;