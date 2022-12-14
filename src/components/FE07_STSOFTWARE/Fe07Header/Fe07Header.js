import {Col, Row} from "react-bootstrap";
import "./Fe07Header.scss"

const Fe07Header = (props) => {
    return (
        <Row className="fe07-header-wrap" style={{margin: "0", padding: "0"}}>
            <Col className="fe07-header-media">
                <Row className="fe07-banner-parallax">
                    <Row className="fe07-banner-bg-wrap">
                        <div className="fe07-banner-inner" style={{backgroundImage:`url(${props.backgroundImageFe07.backGroundFe07})`}}> </div>
                    </Row>
                </Row>
                        <Col className="fe07-banner-caption" xl={12} md={12} xs={12}>
                            <h1>{props.bannerCaption.h1}</h1>
                            <h2>{props.bannerCaption.h2}</h2>
                        </Col>
            </Col>
        </Row>
    )
}
export default Fe07Header;