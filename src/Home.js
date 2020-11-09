import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Navbar from './Sections/Navbar'
import CarouselSection from './Sections/CarouselSecion'
import ScholarshipsSection from './Sections/ScholarshipsSection'
import NoticeSection from './Sections/NoticeSection'
import './assets/style.css'
import Footer from './Sections/Footer'
function Home() {
    return (
        <React.Fragment>
            <Navbar/>
            <CarouselSection/>
            <Container fluid="xs">
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={3}>
                        <NoticeSection/>
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
