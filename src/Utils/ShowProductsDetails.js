import productList from './Products'

const  showProductsDetailsPromise = new Promise((resolve)=>{
    setTimeout(() => {
            resolve(productList);
    },3500);
})

export default showProductsDetailsPromise;