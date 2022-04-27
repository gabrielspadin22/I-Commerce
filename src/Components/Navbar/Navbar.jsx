import React from 'react';

function Navbar({children}) {
    return (
            <ul className='nav-container '>
                <li><a href='' className='hover_text_1'>Inicio</a></li>
                <li><a href='' className='hover_text_1'>Categorias</a></li>
                <li><a href='' className='hover_text_1'>Ofertas</a></li>
                {children}
            </ul>
    );
}

export default Navbar;