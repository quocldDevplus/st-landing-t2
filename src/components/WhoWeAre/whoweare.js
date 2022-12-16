import './whoweare.scss';
import { React, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Fe07Header from '~/components/FE07_STSOFTWARE/Fe07Header/Fe07Header';

const WhoWeAre = () => {
    const [backgroundImageFe07, SetBackgroundImageFe07] = useState([
        { id: '1', backGroundFe07: 'https://drive.google.com/uc?export=view&id=199NbLzJqj92MK2FtDUKKOiwpEbl_uNK7' },
    ]);
    const [bannerCaption, SetBannerCaption] = useState([
        {
            id: 'BnFe07',
            h1: 'United to grow up together',
            h2: '"No one can do everything, but everyone can do something"',
        },
    ]);
    return (
        <div className="whoweare-body">
            <Fe07Header
                backgroundImageFe07={backgroundImageFe07}
                SetBackgroundImageFe07={SetBackgroundImageFe07}
                bannerCaption={bannerCaption}
                SetBannerCaption={SetBannerCaption}
            />
            <div className="whoweare-container">
                <Row className="whoweare-row-fluid">
                    <div className="whoweare-container-1">
                        <Col className="whoweare-column-inner">
                            <div className="whoweare_wrapper">
                                <Col className="whoweare-text-column">
                                    <div className="whoweare-wrapper">
                                        <p>
                                            Established on the early of 2016 and known as STD Software serves diverse
                                            global clients (Japanese, Australian, US) by offering mainstream services:
                                            IT outsourcing, software & website development, mobile applications.
                                        </p>
                                        <p>
                                            In 2019, STD Software was acquired to become ST Software division in ST
                                            United beside other divisions: ST Digital and ST Incubator.
                                        </p>
                                        <p>
                                            <strong>Our vision</strong>: Be the premier enterprise solutions provider
                                            and software product innovator in the Asia Pacific region
                                        </p>
                                        <p>
                                            <strong>Our mission</strong>:
                                        </p>
                                        <ul>
                                            <li>
                                                To empower our business partners to gain competitive advantage by
                                                providing innovative solutions.
                                            </li>
                                            <li>
                                                To continuously enhance our expertise in cutting-edge technologies and
                                                processes.
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row className="whoweare-row-fluid">
                    <Col className="whoweare-column-container vc_col-sm-12">
                        <Col className="whoweare-column-inner">
                            <div className="whoweare_wrapper">
                                <Col className="whoweare-text-column">
                                    <div className="whoweare_wrapper">
                                        <h1 className="WE-ARE-ST-UNITED">WE ARE ST UNITED</h1>
                                    </div>
                                </Col>
                                <div className="whoweare_empty_space">
                                    <span className="whoweare_empty_space_inner"></span>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
                <Row className="whoweare-row-fluid">
                    <Col className="whoweare-column-container vc_col-sm-12">
                        <Col className="whoweare-column-inner">
                            <div className="whoweare-wrapper">
                                <Col className="whoweare-row-fluid vc_inner">
                                    <Col className="whoweare-column-container vc_col-sm-6">
                                        <div className="whoweare_column-inner">
                                            <div className="whoweare-wrapper">
                                                <Col className="whoweare-column-text vc_custom_1511817036667">
                                                    <div className="whoweare_wrapper">
                                                        <p>
                                                            <b>Passion to Excel</b>
                                                        </p>
                                                        <p>
                                                            We will capitalize on our TENACITY to create better ways of
                                                            doing things. We will not rest on our current capabilities,
                                                            but rather build on them in our personal and professional
                                                            journey to be the best we can be and set new standards in
                                                            our industry. We will expect more from ourselves than our
                                                            clients do. We will endeavor to EXCEED EXPECTATIONS in
                                                            everything that we do.
                                                        </p>
                                                        <p>
                                                            <b>Creativity & Innovation</b>
                                                        </p>
                                                        <p>
                                                            We believe that employees are fountains of new ideas,
                                                            fueling better products, services, and processes. We believe
                                                            that there is always enough room for improvement. We will
                                                            constantly get out of our comfort zones and embrace change
                                                            in everything we do.
                                                        </p>
                                                        <p>
                                                            <b>Competence</b>
                                                        </p>
                                                        <p>
                                                            Through the unique skills of our employees, we continuously
                                                            improve and innovate our services and solutions to meet
                                                            customer needs. We will embrace the attitude of continuous
                                                            learning because what got us here may no longer be enough to
                                                            sustain our business in the future.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="whoweare-column-container vc_col-sm-6"></Col>
                                </Col>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default WhoWeAre;
