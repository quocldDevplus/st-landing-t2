import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './incubation.scss';
import FE02TypicalChild from '~/components/FE02Typical/TypicalChild/FE02TypicalChild';

const Incubation = () => {
    const [list2, setList2] = useState([
        {
            id: 'incu03-1',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/iot-e1567668899699.jpg',
            teamCaption: 'IoT Space',
            teamDesigner: '#coworking space',
            teamCaptionHide:
                'Taking advantage of the co-founder team with experience in the software development, IoT Space aims to target customers who are developers, SMEs or tech start-up.                        ',
        },
        {
            id: 'incu03-2',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/nomadspace.jpg',
            teamCaption: 'Nomad Space',
            teamDesigner: '#coworking space',
            teamCaptionHide:
                'A casual, comfortable, and convenient place to work with the benefit of cafe service and a collaborative community. Nomad space is intend to digital nomad community for working, meetup, business exchange',
        },
        {
            id: 'fe02-3',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/ciaoflora-1.jpg ',
            teamCaption: 'Ciaoflora',
            teamDesigner: '#ecommerce #flower delivery',
            teamCaptionHide:
                'As a member of Interflora worldwide (ID 292), Ciaoflora Việt Nam is leading online flower service of Vietnam - which can not only offer express flower delivery (within 2-3 hours of ordering) and same day delivery but worldwide flower delivery too.',
        },
        {
            id: 'fe02-4',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/cafedat-1024x1024-1.jpg',
            teamCaption: 'Cafe Dat - ダトコーヒー',
            teamDesigner: '#coffee product',
            teamCaptionHide:
                'Cafe Dat is aiming not only bring the best coffee experience to consumers, but also to produce the highest quality coffee.',
        },
    ]);
    const [list, setList] = useState([
        {
            id: 'inc1',
            img: 'https://stunited.vn/wp-content/uploads/2019/09/icuba-150x150.png',
            title: 'Incubator Program',
            description:
                'Targeting early-stage startups in multiple sectors, our goal is to support founders with practical education and mentorship from idea validation, MVP development, and business validation stage.',
        },
        {
            id: 'inc2',
            img: 'https://stunited.vn/wp-content/uploads/2019/09/icons-400sq-record-keeping-office-space-150x150.png',
            title: 'Coworking Space',
            description:
                'Based on coworking platform with IoT Space, Nomad Space... provides not only space for working but also an opportunity for members to thrive by exploring collaboration, learning, and access to our strategic network.',
        },
        {
            id: 'inc3',
            img: 'https://stunited.vn/wp-content/uploads/2019/09/Money-512-150x150.png',
            title: 'Strategic Funding',
            description:
                ' ST United is considering an early stage VC fund that invests in technology startups in Vietnam, particularly Danang, at their early and growth stages. We provide funding, and assistance by establishing strategic partnerships to help startups scale their businesses',
        },
    ]);
    return (
        <div className="incubation--container">
            <Row className="banner--container">
                <Col className="banner--background"></Col>
            </Row>
            <Row className="banner--content">
                <Col className="banner-title">
                    <h1 className="banner--title">ST INCUBATION</h1>
                    <h2 className="banner--sub">
                        We're not a mentor, expert or coach whatsoever. We are a founder and fight together
                    </h2>
                </Col>
            </Row>
            <Container className="st--incubation--container">
                <Row className="st--incubation--cover--container">
                    <Col className="st--incubation">
                        <Row className="incubation--content">
                            <Col className="incubation--title" md={12} sm={12} xs={12}>
                                <h1>ST INCUBATION</h1>
                            </Col>
                            <Col className="incubation--description" md={12} sm={12} xs={12}>
                                <Row className="incubation--cover--description">
                                    <Col className="incubation--des">
                                        <p className="p1">
                                            <span className="s1">
                                                After long time working in software development outsourcing industry,
                                                founders of
                                                <strong> ST United </strong>
                                                still keep intense aspiration how to apply the high technologies to
                                                solve the society problem in Vietnam.
                                            </span>
                                        </p>
                                        <p className="p1">
                                            <span className="s1">
                                                Beginning as a provider of co-working spaces with
                                                <strong> IoT Space </strong>
                                                and Nomad Space in Danang,
                                                <strong> ST United </strong>
                                                would like to support the startup and ICT community. Moreover,
                                                <strong> ST United </strong>
                                                provides incubator programs for budding entrepreneurs. The program
                                                focuses on providing resources and support for startups in terms of
                                                business modeling, market penetration and even product development.
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="service--container">
                                    {list &&
                                        list.map((item, index) => {
                                            return (
                                                <Col className="service--block" xs={12} md={4}>
                                                    <Row className="service--icon">
                                                        <img src={item.img} />
                                                    </Row>
                                                    <Row className="service--content">
                                                        <h3 className="service--title"> {item.title}</h3>
                                                        <p className="service--desc"> {item.description}</p>
                                                    </Row>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="ourincubation">
                <Row className="ourincubation--cover">
                    <Col className="ourincubation--container">
                        <Row className="ourincubation--content">
                            <h2 className="ourincubation--title"> Our incubating projects</h2>
                            <h3 className="ourincubation--covertitle">We are supporting for these cool teams</h3>
                        </Row>
                        <Row className="fe02-wpb__col-container" style={{ padding: '0', margin: '0' }}>
                            <FE02TypicalChild listContainerFe02={list2} SetListContainerFe02={setList2} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Incubation;
