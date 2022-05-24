import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({children}) {

    return (
            <ul className='nav-container '>
                <li className='hover_text_1'><Link className='txt_link'to={'/'}>Inicio</Link></li>
                <li className='hover_text_1'><Link className='txt_link'to={'/products'}>Productos</Link></li>
                <li className='hover_text_1 cat_cont'>Categorias
                    <ul className='category_container'>
                        <p className='nn'>Categorias</p>
                        <Link className='txt_link'to={`/category/logos`}><p className='cate hover_bg_2'>Logos</p></Link>
                        <Link className='txt_link'to={`/category/modelos`}><p className='cate hover_bg_2'>Modelos</p></Link>
                        <Link className='txt_link'to={`/category/consumibles`}><p className='cate hover_bg_2'>Consumibles</p></Link>
                    </ul> 
                </li>
                <li className='hover_text_1'><Link className='txt_link 'to={'/offers'}>Ofertas</Link></li>
                {children}
            </ul>
    );
}

export default Navbar;