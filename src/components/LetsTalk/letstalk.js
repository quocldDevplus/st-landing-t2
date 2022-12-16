import './letstalk.scss';
import { React, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BiChevronRight } from 'react-icons/bi';
import Fe07Header from '~/components/FE07_STSOFTWARE/Fe07Header/Fe07Header';

const LetsTalk = () => {
    const [backgroundImageFe07, SetBackgroundImageFe07] = useState([
        { id: '1', backGroundFe07: 'https://drive.google.com/uc?export=view&id=1cTwRlqdvez1xoHdrcM7PSO15csH3Nb5y' },
    ]);
    const [bannerCaption, SetBannerCaption] = useState([
        {
            id: 'BnFe07',
            h1: "Let's talk",
            h2: 'Stay in touch with us',
        },
    ]);
    return (
        <div className="letstalk-container" style={{ margin: '0' }}>
            <Fe07Header
                className="fe07-header-banner"
                backgroundImageFe07={backgroundImageFe07}
                SetBackgroundImageFe07={SetBackgroundImageFe07}
                bannerCaption={bannerCaption}
                SetBannerCaption={SetBannerCaption}
            />
            <div className="letstalk-container-block">
                <div className="page-title-breadscrumb-top ">
                    <Row ClassName="letstalk-title">
                        <Col sm={12} className="letstalk-sm-12">
                            <Breadcrumb className="letstalk-breadcrumb">
                                <Breadcrumb.Item href="https://stunited.vn/">Home</Breadcrumb.Item>
                                <BiChevronRight />
                                <Breadcrumb.Item active>Let’s talk</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="letstalk-page-title-left">
                                <h1 className="letstalk-title-head">Let’s talk</h1>
                            </div>
                        </Col>
                    </Row>
                </div>
                <section className="section-detail-content-houzez-page-template">
                    <div className="letstalk-block">
                        <div className="letstalk-box">
                            <div className="letstalk-main-page">
                                <div className="letstalk-white-block">
                                    <Row className="letstalk-entry-content">
                                        <Col md={8} ClassName="letstalk-input">
                                            <form size="sm" className="letstalk-form">
                                                <div className="letstalk-column-inner">
                                                    <div className="letstalk-column-text">
                                                        <div className="letstalk-wrapper">
                                                            <p className="noob">
                                                                <strong>ST United</strong> is always glad to hear your
                                                                comments regarding our services. Whether you have any
                                                                questions, or wish to get a quote for your project, or
                                                                require further information about what we can offer you,
                                                                please do not hesitate to contact us
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <label
                                                        id="inputGroup-sizing-sm"
                                                        className="letstalk-form__input-label"
                                                    >
                                                        Your Name
                                                    </label>

                                                    <input className="letstalk-form__input-box" />

                                                    <label
                                                        id="inputGroup-sizing-sm"
                                                        className="letstalk-form__input-label"
                                                    >
                                                        Your Email
                                                    </label>

                                                    <input className="letstalk-form__input-box" />

                                                    <label
                                                        id="inputGroup-sizing-sm"
                                                        className="letstalk-form__input-label"
                                                    >
                                                        Your Phone
                                                    </label>

                                                    <input className="letstalk-form__input-box" />

                                                    <label
                                                        id="inputGroup-sizing-sm"
                                                        className="letstalk-form__input-label"
                                                    >
                                                        Subject
                                                    </label>

                                                    <input className="letstalk-form__input-box" />

                                                    <div className="mb-4">
                                                        <label className="letstalk-form__input-label">
                                                            Your Message
                                                        </label>

                                                        <textarea class="letstalk-form__text-area"></textarea>
                                                    </div>

                                                    <Button variant="orange" type="submit" value="send">
                                                        Send
                                                    </Button>
                                                    <span class="ajax-loader"></span>
                                                </div>
                                            </form>
                                        </Col>
                                        <Col md={4} ClassName="letstalk-information">
                                            <div className="vc_column-inner">
                                                <div ClassName="wpb_wrapper">
                                                    <div ClassName="wpb_text_column">
                                                        <h4 className="contact">Office</h4>
                                                        <p ClassName="">
                                                            Address: Nomad Space, No.14 An Thuong 18, Danang, Vietnam
                                                        </p>
                                                        <p>Hotline: (+84) 777 463 183</p>
                                                        <p className="guest-email">Email: hello(at)stunited.vn</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default LetsTalk;
