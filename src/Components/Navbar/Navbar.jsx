import React from 'react';
import ItemList from '../ItemList/ItemList';
function Navbar({children}) {

    return (
            <ul className='nav-container '>
                <li className='hover_text_1'>Inicio</li>
                <li className='hover_text_1' >Productos</li>
                <li className='hover_text_1'>Categorias</li>
                <li className='hover_text_1'>Ofertas</li>
                {children}
            </ul>
    );
}

export default Navbar;