import {Col, Row} from "react-bootstrap";
import "./Fe07Header.scss"
import {useEffect, useState} from "react";

const Fe07Header = (props) => {
        useEffect(() => {
            const handleScroll = () => {
                let bannerImage  = document.querySelector('.fe07-banner-inner');
                let Y = window.scrollY;
                if (window.innerWidth <= 990 && Y >= 60) {
                    bannerImage.style.transform = 'translate3d(0, ' + (Y - 60) / 3.5 + 'px, 0)';
                } else {
                    bannerImage.style.transform = 'translate3d(0, 0, 0)';
                }
                if (window.innerWidth >= 1000 && Y >= 10) {
                    bannerImage.style.transform = 'translate3d(0, ' + Y / 3.5 + 'px, 0)';
                } else {
                    bannerImage.style.transform = 'translate3d(0, 0, 0)';
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [window.scrollY]);
    return (
        <Row className="fe07-header-wrap" style={{margin: "0", padding: "0"}}>
            <Col className="fe07-header-media">
                <Row className="fe07-banner-parallax" style={{height:"400px"}}>
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