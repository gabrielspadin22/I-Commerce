import productList from './Products'


    const  showProductsPromise = new Promise((resolve)=>{
        setTimeout(() => {
                resolve(productList);
        },2000);
    })

export default showProductsPromise;