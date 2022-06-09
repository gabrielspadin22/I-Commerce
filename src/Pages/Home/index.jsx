import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className='my-5'>
            <Card className="bg-dark text-white mb-5">
                <Card.Img className='opacity-25' height={"220px"} src="https://static3.abc.es/media/ciencia/2021/05/28/Pulsoslaser-kS3G--620x349@abc.jpg" alt="Ciencia" />
                <Card.ImgOverlay>
                    <Card.Title fw-bolder className="fw-bolder">Ciencia</Card.Title>
                    <Card.Text>Descubre algunas de las particulas, energias y elementos que componen nuestra existencia</Card.Text>
                    <Card.Text className='fs-5 text-center'>Aumenta tu conocimiento, aumenta tu poder</Card.Text>
                    <Card.Text className='fs-5 text-center text-primary'><a href="https://gabrielspadin22.github.io/ciencia/">Visitar sitio</a></Card.Text>
                </Card.ImgOverlay>
            </Card>
            <CardGroup className='my-5'>
            <Card className='bg-dark bg-opacity-75'>
                <Card.Img className="my-3" variant="top" src="https://i.pinimg.com/originals/b4/e3/71/b4e371619042d1e80918d09904e90f7d.gif" />
                <Card.Body >
                    <Card.Title className='fs-5 fw-bolder'>Matrix?</Card.Title>
                    <Card.Text className='fs-5'>Este efecto puede ser creado muy facilmente con JavaScript.</Card.Text>
                </Card.Body>
                <Card.Footer className='fs-5'><small className="text-muted ">Consta de una generacion aleatoria de caracteres predefinidos los cuales son trasladados a una velocidad y repeticion aleatoria.</small>
                </Card.Footer>
            </Card>
            <Card border="primary" className='bg-secondary bg-opacity-25 mx-auto' style={{ width: '18rem' }}>
                <Card.Header className="text-center fw-bolder my-3">OMG!</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center fs-3 text-muted my-5">LOLCODE-ENGLISH-BRAINF*CK</Card.Title>
                    <Card.Text className="text-primary fs-5 my-5">Tres nuevos lenguajes de programacion para poner a prueba tus habilidades como desarrollador!</Card.Text>
                    <Link className='fs-5'to={`/category/otros`}><p className='btn btn-secondary bg-transparent'>Ver productos</p></Link>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img className='opacity-25' src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/339977/339977-1631534697795-31f11e299a096.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center my-2 fw-bolder">Coder-House</Card.Title>
                    <Card.Text className='fs-5 text-center m-3 fw-bolder'>Capacitate en las tecnologias del momento con los mejores tutores y al mejor precio</Card.Text>
                    <Card.Text className='fs-5 text-center text-primary fw-bolder my-5'><a href="https://www.coderhouse.com/">Saber mas</a></Card.Text>
                </Card.ImgOverlay>
            </Card>
            </CardGroup>
        </div>
    );
}

export default Home;