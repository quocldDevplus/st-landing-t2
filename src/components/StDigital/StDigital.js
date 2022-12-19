import './StDigital.scss';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Fe07Header from '~/components/STSOFTWARE/Fe07Header/Fe07Header';
import { getAllDataPortfolio, getAllDataStDigitalIcon, getAllDataStDigitalImage } from '~/service/Apiservice';

const StDigital = () => {
    // const [list, setList] = useState([
    //     {
    //         id: 'imgicon1',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/seo.png',
    //         title: 'SEO',
    //         description:
    //             'With ST Digital, your outsourced staff in the Vietnam will render Search Engine Optimisation services guaranteed to boost your visibility and accessibility online by helping you climb up to the top of Search Engine Results Pages (SERPs). Changing times call for changing your business strategies, and our goal is to help you grow as well as keep up with the times.',
    //     },
    //     {
    //         id: 'imgicon2',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/marketing-300x300.png',
    //         title: 'Social Media Service',
    //         description:
    //             'Our social media services is a commonly used method for directing traffic onto your website or specific content through increased visibility in different social media sites and engaging with your audience in the same platform. It is commonly synthesised to support SEO efforts and helps your brand to become easily accessible to your audience.',
    //     },
    //     {
    //         id: 'imgicon2',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/webdesign-icon-300x300.png',
    //         title: 'Graphic Design',
    //         description:
    //             'Sensible and engaging, our design studio is here to help you effectively communicate your brand online. We help you create a meaningful and lasting impression with your customers, leading to new opportunities for your business.',
    //     },
    // ]);
    // const [listuser, setlistuser] = useState([
    //     {
    //         id: 'img1',
    //         img: 'http://dev.stunited.vn/wp-content/uploads/2019/09/20431332_1805663032784139_2478410876069611325_n-300x300.jpg',
    //         Name: 'Hoa, Le My',
    //         Work: 'Digital Marketer',
    //     },
    //     {
    //         id: 'img2',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/Screen-Shot-2019-09-06-at-9.57.56-AM-e1567738897606.png',
    //         Name: 'Quoc Phan',
    //         Work: 'Creative Designer',
    //     },
    //     {
    //         id: 'img3',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/39309617_2207185245989746_4586629101913112576_n-480x480.jpg',
    //         Name: 'Thuong, Pham Quynh',
    //         Work: 'Digital Marketer',
    //     },
    //     {
    //         id: 'img4',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/20190306_193427_746-1-e1567739330543-482x480.jpg',
    //         Name: 'Anh, Vo Quynh',
    //         Work: 'Digital Marketer',
    //     },
    //     {
    //         id: 'img5',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/Screen-Shot-2019-09-06-at-10.14.48-AM-e1567739750539.png',
    //         Name: 'Thinh, Nguyen Duc',
    //         Work: 'Amazon Business Executive',
    //     },

    //     {
    //         id: 'img6',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/Screen-Shot-2019-09-06-at-10.33.52-AM-e1567740899939.png',
    //         Name: 'Toan Pham',
    //         Work: 'Tool Developer',
    //     },

    //     {
    //         id: 'img7',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/46826207_2335699766654103_6405298755335094272_o-e1567741149586-480x480.jpg',
    //         Name: 'Ngan, Tran Mai',
    //         Work: 'Amazon Business Executive',
    //     },

    //     {
    //         id: 'img8',
    //         img: 'https://stunited.vn/wp-content/uploads/2019/09/Screen-Shot-2019-09-06-at-10.48.02-AM-e1567741771971.png',
    //         Name: 'Loi Mai',
    //         Work: 'Amazon Business Executive',
    //     },
    // ]);
    const [backgroundImageFe07, SetBackgroundImageFe07] = useState({
        id: '1',
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=1txXzanwmlTUCVlBVRsBiUAQqmvWWT6Z2',
    });
    const [bannerCaption, SetBannerCaption] = useState({
        id: 'BnFe07',
        h1: 'ST DIGITAL',
        h2: 'Offshore Digital Marketing Services',
    });
    const [list, setList] = useState([]);
    const [listuser, setlistuser] = useState([]);

    useEffect(() => {
        fetchListstDigitalIcon();
    }, []);
    const fetchListstDigitalIcon = async () => {
        let res = await getAllDataStDigitalIcon();
        setList(res);
    };

    useEffect(() => {
        fetchListstDigitalImage();
    }, []);
    const fetchListstDigitalImage = async () => {
        let res = await getAllDataStDigitalImage();
        setlistuser(res);
    };
    return (
        <Row className="Stdigital-container" style={{ margin: '0' }}>
            <Fe07Header
                backgroundImageFe07={backgroundImageFe07}
                SetBackgroundImageFe07={SetBackgroundImageFe07}
                bannerCaption={bannerCaption}
                SetBannerCaption={SetBannerCaption}
            />
            <Col className="Stdigital-container-block">
                <Row className="Stdigital-title-top">
                    <Col className="Stdigital-title-row">
                        <Row className="Stdigital-title">
                            <h1 className="Stdigital-title-head"> ST Digital</h1>
                        </Row>
                    </Col>
                </Row>
                <Row className="Stdigital-section-content">
                    <Col className="Stdigital-section">
                        <Col className="Stdigital-page-main">
                            <Col className="Stdigital-content-text">
                                <p>
                                    <strong>ST Digital</strong>
                                    "offers professional offshore digital marketing services that can make your business
                                    stand out from the digital crowd. Our digital marketing services range from search
                                    engine optimisation (SEO), social media services, email marketing services, content
                                    outsourcing, and graphic design services, which aids in creating organic engagement
                                    and direct traffic towards your website and its content. Through partnering with ST,
                                    we can help you create a good lasting impression online and give you an edge over
                                    your top competitors!"
                                </p>
                            </Col>
                            <Col className="Stdigital-module-three-columns">
                                <Row className="Stdigital-module">
                                    {list &&
                                        list.map((item, index) => {
                                            return (
                                                <Row className="module-item col-md-4">
                                                    <Col className="module-block">
                                                        <Col className="block-icon">
                                                            <img
                                                                width="60"
                                                                height="60"
                                                                src={item.image}
                                                                alt=""
                                                                srcset=""
                                                            />
                                                        </Col>
                                                        <Col className="block-content">
                                                            <h1 className="h1-content">{item.title}</h1>
                                                            <p>{item.description}</p>
                                                        </Col>
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                </Row>
                                <Row className="Stdigital-module-2">
                                    <Col className="Stdigital-meet-our-team">
                                        <Row className="Stdigital-meet-our-team-title">
                                            <h1>Meet our team</h1>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="Stdigital-module-container">
                                    <Col className="Stdigital-module-block">
                                        <Row className="Stdigital-module-3 ">
                                            {listuser &&
                                                listuser.map((item, index) => {
                                                    return (
                                                        <Row className="Stdigital-list-user col-md-3">
                                                            <Col className="Stdigital-wrapper-list">
                                                                <Row className="Stdigital-wrapper-list-user ">
                                                                    <img
                                                                        width="300"
                                                                        height="300"
                                                                        src={item.image}
                                                                    ></img>
                                                                    <p>
                                                                        <strong> {item.Name}</strong>
                                                                        <br /> {item.Work}
                                                                    </p>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    );
                                                })}
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default StDigital;
