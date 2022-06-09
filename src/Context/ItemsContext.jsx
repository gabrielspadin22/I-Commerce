import { createContext, useContext, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';


export const ItemsContext = createContext({});

export const useItemsContext = () => useContext(ItemsContext);

const ItemsContextProvider = ({children}) => {

    const [itemsList, setitemsList] = useState([])

    const db = getFirestore();
    const itemCollection = collection(db, 'items');

    function callItemsFromFireBase() {
        getDocs(itemCollection)
        .then(snapshot => {setitemsList(snapshot.docs.map(doc => {return {...doc.data(), id: doc.id}}));})
        .catch(err => console.log(err));
    }
        

    return (
        <ItemsContext.Provider value={{itemsList, callItemsFromFireBase}}>
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsContextProvider;