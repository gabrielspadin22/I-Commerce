import productList from './Products'

const  showProductsDetailsPromise = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(productList);
    }, 2000);        
})

export default showProductsDetailsPromise;