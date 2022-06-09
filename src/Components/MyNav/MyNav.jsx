import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

function MyNav({children}) {
    return (
        <Navbar bg="transparent" expand="md" className='p-2'>
            <Container className='p-0 text-center'>
            <Navbar.Brand className='text-light ms-0 my-2' >
                <Link className='txt_link'to={'/'}>
                        <div className="cube__container">
                            <div className="cube__effect">
                                <div className="cube" >
                                    <div className="cube__img top__cube"><img width="75px" height="75px" src='https://gabrielspadin22.github.io/ciencia/assets/fondo.png' alt='logo'/></div>
                                    <div className='fs-5'>
                                        <span className="cube__img style1 fs-5"><img width="75px" src='https://gabrielspadin22.github.io/ciencia/assets/fondo.png' alt='logo'/><div className='my-3'>Inicio</div></span>
                                        <span className="cube__img style2 fs-5"><img width="75px" src='https://gabrielspadin22.github.io/ciencia/assets/fondo.png' alt='logo'/><div className='my-3'>Inicio</div></span>
                                        <span className="cube__img style3 fs-5"><img width="75px" src='https://gabrielspadin22.github.io/ciencia/assets/fondo.png' alt='logo'/><div className='my-3'>Inicio</div></span>
                                        <span className="cube__img style4 fs-5"><img width="75px" src='https://gabrielspadin22.github.io/ciencia/assets/fondo.png' alt='logo'/><div className='my-3'>Inicio</div></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='my-3 ms-auto p-2 bg-primary bg-opacity-25'/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="m-auto">
                        <Link className='txt_link'to={'/products'}>Productos</Link>
                    </Nav>
                    <Nav className="m-auto cat_cont hover_text_1">
                    <p className='nn m-auto'>Categorias</p>
                    <ul className='category_container'>
                        <p className='nn'>Categorias</p>
                        <Link className='txt_link'to={`/category/front`}><p className='cate hover_bg_2'>Front-End</p></Link>
                        <Link className='txt_link'to={`/category/back`}><p className='cate hover_bg_2'>Back-End</p></Link>
                        <Link className='txt_link'to={`/category/otros`}><p className='cate hover_bg_2'>Otros</p></Link>
                    </ul> 
                    </Nav>
                    <Nav className="m-auto">
                        {children}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;