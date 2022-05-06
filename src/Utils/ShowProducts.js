import productList from './Products'


    const  showProductsPromise = new Promise((resolve)=>{
        setTimeout(() => {
                resolve(productList);
        },0);
    })

export default showProductsPromise;