import {Col, Row} from "react-bootstrap";
import "./Fe07Header.scss"

const Fe07Header=() =>{
    return(
        <Row className="fe07-header-wrap">
            <Col className="fe07-header-media">
                <Row className="fe07-banner-parallax">
                    <Row className="fe07-banner-bg-wrap">
                        <Col className="fe07-banner-inner">
                        </Col>
                    </Row>
                </Row>
                <Col className="fe07-banner-caption" xl ={12} md={12} xs={12}>
                    <h1>ST SOFTWARE</h1>
                    <h2>WE OFFER A WEALTH OF SERVICES TO ADDRESS YOUR TECHNOLOGY NEEDS.</h2>
                </Col>
            </Col>
        </Row>
    )
}
export default Fe07Header;