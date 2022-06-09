import React, { useState } from 'react';
import './CreateItems.css'
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import Content from '../Content/Content';
import Swal from 'sweetalert2';
function CreateItems() {
    const [orderid, setOrderId] = useState({
        bpp:0, categoria:'', color:'', desc: '', discount: 0, img: '', initial: 1, newPrice:0, oldPrice:0, resol:'', shipp:'', size:'', sold:0, title:'',type:'',units:0
    });
    const sendOrder = (e) =>{
        e.preventDefault()
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        addDoc(itemCollection, orderid)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Creacion correcta`,
            showConfirmButton: false,
            timer: 1200
        })
    }
    const handleInputChange = (e) =>{
        setOrderId(({...orderid,[e.target.name]:e.target.value}))
    }
    console.log(orderid);
    return (
        <Content>
            <form className='col text-center'>Crear Producto
                <input required onChange={handleInputChange} type="number" name="bpp" placeholder='bpp' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="categoria" placeholder='categoria' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="color" placeholder='color' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="desc" placeholder='descripcion' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="number" name="discount" placeholder='discount' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="img" placeholder='url img' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="number" name="newPrice" placeholder='newPrice' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="number" name="oldPrice" placeholder='oldPrice' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="resol" placeholder='resolucion' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="shipp" placeholder='shipp (envio gratis)' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="size" placeholder='size' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="number" name="sold" placeholder='sold' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="title" placeholder='title' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="text" name="type" placeholder='type' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input required onChange={handleInputChange} type="number" name="units" placeholder='units (stock)' className='text-center rounded-pill border m-auto row my-1 fs-5'/>
                <input type="submit" value="Crear producto" className='btn btn-primary fs-3' onClick={sendOrder}/>
            </form>
        </Content>
            
    );
}

export default CreateItems;