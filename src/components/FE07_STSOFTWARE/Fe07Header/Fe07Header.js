import {Col, Row} from "react-bootstrap";
import "./Fe07Header.scss"
import {useState} from "react";
import ImageHeader from "~/components/FE07_STSOFTWARE/imagesHeader/ImageHeader";

const Fe07Header = (props) => {
    const {backgroundImageFe07, SetBackgroundImageFe07} = props
    const {bannerCaption, SetBannerCaption} = props
    return (
        <Row className="fe07-header-wrap">
            <Col className="fe07-header-media">
                <Row className="fe07-banner-parallax">
                    <Row className="fe07-banner-bg-wrap">
                        <Col className="fe07-banner-inner">
                            <ImageHeader
                                backgroundImageFe07={backgroundImageFe07}
                                SetBackgroundImageFe07={SetBackgroundImageFe07}
                            />
                        </Col>
                    </Row>
                </Row>
                <Col className="fe07-banner-caption" xl={12} md={12} xs={12}>
                    {bannerCaption && bannerCaption.map((item, i) => {
                        return (
                            <>
                                <h1>{item.h1}</h1>
                                <h2>{item.h2}</h2>
                            </>
                        )
                    })}

                </Col>
            </Col>
        </Row>
    )
}
export default Fe07Header;