import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar({children}) {

    return (
            <ul className='nav-container '>
                
                <li className='hover_text_1'><Link className='txt_link'to={'/'}>Inicio</Link></li>
                <li className='hover_text_1'><Link className='txt_link'to={'/products'}>Productos</Link></li>
                <li className='hover_text_1'><Link className='txt_link'to={'/category'}>Categorias</Link></li>
                <li className='hover_text_1'><Link className='txt_link'to={'/offers'}>Ofertas</Link></li>
                {children}
            </ul>
    );
}

export default Navbar;