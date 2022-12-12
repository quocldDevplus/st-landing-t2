import {Col, Row} from "react-bootstrap";
import "./Fe07Header.scss"

const Fe07Header = (props) => {
    const {backgroundImageFe07, SetBackgroundImageFe07} = props
    const {bannerCaption, SetBannerCaption} = props
    return (
        <Row className="fe07-header-wrap" style={{margin:"0",padding:"0"}}>
            <Col className="fe07-header-media">
                <Row className="fe07-banner-parallax">
                    <Row className="fe07-banner-bg-wrap">
                        <Col className="fe07-banner-inner">
                            {props.backgroundImageFe07 && props.backgroundImageFe07.map((item) => {
                                    return (
                                        <img key={item.id} src={item.backGroundFe07} alt=""/>
                                    )
                                }
                            )
                            }
                        </Col>
                    </Row>
                </Row>
                    {bannerCaption && bannerCaption.map((item, i) => {
                        return (
                            <Col key={item.id} className="fe07-banner-caption" xl={12} md={12} xs={12}>
                                <h1>{item.h1}</h1>
                                <h2>{item.h2}</h2>
                            </Col>
                        )
                    })}

            </Col>
        </Row>
    )
}
export default Fe07Header;