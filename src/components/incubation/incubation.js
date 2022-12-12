import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './incubation.scss';
import '~/components/FE02Typical/TypicalChild/FE02TypicalChild';

const Incubation = () => {
    const [list2, setList2] = useState([
        {
            id: 'fe02-1',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/Capture.png',
            teamCaption: 'eHealth',
            teamDesigner: '#ASP.NET #Android #iOS',
            teamCaptionHide:
                'A health data management application for ' +
                'the personal healthcare in coordination with employers, pharmacies and medical examination providers.',
        },
        {
            id: 'fe02-2',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/image-logo-1.png',
            teamCaption: 'Havuta',
            teamDesigner: '#Blockchain #NodeJS #ReactJS #React Native',
            teamCaptionHide:
                '\n' +
                '                            Havuta brings smartphone and blockchain-based solutions to the data collection challenges facing the development sector. Creating a blockchain-based feedback loop benefiting NGOs, engaging their beneficiaries, and promoting transparency. ',
        },
        {
            id: 'fe02-3',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/figure01.jpg',
            teamCaption: 'E-ASPRO',
            teamDesigner: '#Javascript #HTML #CSS',
            teamCaptionHide:
                'E-ASPRO is a cloudtype fulfillment mail order solution that enables you to efficiently manage mail order operations such as site management,' +
                ' orders, shipping, inventory, and shipping inquiries from one system',
        },
        {
            id: 'fe02-4',
            image: 'https://stunited.vn/wp-content/uploads/2019/09/2e-jycg6_400x400.jpg',
            teamCaption: 'Vision Express',
            teamDesigner: '#Chatbot #Javascript #HTML #CSS',
            teamCaptionHide: 'Chatbot to communicate with users, reply questions automatically.',
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
                                <Row className="incubating--project">
                                    <Col className="incubating--cover"></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Incubation;
