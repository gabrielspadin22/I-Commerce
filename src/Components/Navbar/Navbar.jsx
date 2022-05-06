import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar({children}) {

    return (
            <ul className='nav-container '>
                <li className='hover_text_1'><Link to={'/'}>Inicio</Link></li>
                <li className='hover_text_1'><Link to={'/products'}>Productos</Link></li>
                <li className='hover_text_1'><Link to={'/category'}>Categorias</Link></li>
                <li className='hover_text_1'><Link to={'/offers'}>Ofertas</Link></li>
                {children}
            </ul>
    );
}

export default Navbar;