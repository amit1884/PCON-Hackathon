import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from './Sections/Navbar'
import CarouselSection from './Sections/CarouselSecion'
import ScholarshipsSection from './Sections/ScholarshipsSection'
import './assets/style.css'
import Footer from './Sections/Footer'
import SearchSection from './Sections/SearchSection'
function Home() {
    return (
        <React.Fragment>
            <Navbar/>
            <CarouselSection/>
            <Container fluid="xs">
                <Row>
                    <Col xs={12} md={4}>
                        <SearchSection/>
                    </Col>
                    <Col xs={12} md={7}>
                        <ScholarshipsSection/>
                    </Col>
                </Row>
                </Container>
                <Footer/>
        </React.Fragment>
    )
}

export default Home
