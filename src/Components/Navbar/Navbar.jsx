import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({children}) {

    return (
            <ul className='nav-container '>
                <li className='hover_text_1'><Link className='txt_link'to={'/'}>
                        <div className="cube__container">
                            <div className="cube__effect">
                                <div className="cube" >
                                    <div className="cube__img top__cube"><img width="75px" height="75px" src='./e.png' alt='logo'/></div>
                                    <div className='fs-5'>
                                        <span className="cube__img style1 fs-5"><img width="75px" height="75px" src='./e.png' alt='logo'/>Inicio</span>
                                        <span className="cube__img style2 fs-5"><img width="75px" height="75px" src='./e.png' alt='logo'/>Inicio</span>
                                        <span className="cube__img style3 fs-5"><img width="75px" height="75px" src='./e.png' alt='logo'/>Inicio</span>
                                        <span className="cube__img style4 fs-5"><img width="75px" height="75px" src='./e.png' alt='logo'/>Inicio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link></li>
                <li className='hover_text_1'><Link className='txt_link'to={'/products'}>Productos</Link></li>
                <li className='hover_text_1 cat_cont'>Categorias
                    <ul className='category_container'>
                        <p className='nn'>Categorias</p>
                        <Link className='txt_link'to={`/category/logos`}><p className='cate hover_bg_2'>Logos</p></Link>
                        <Link className='txt_link'to={`/category/modelos`}><p className='cate hover_bg_2'>Modelos</p></Link>
                        <Link className='txt_link'to={`/category/consumibles`}><p className='cate hover_bg_2'>Consumibles</p></Link>
                    </ul> 
                </li>
                {children}
            </ul>
    );
}

export default Navbar;