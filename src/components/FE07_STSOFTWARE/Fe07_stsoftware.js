import './Fe07_stsoftware.scss'
import {useEffect, useState} from "react";
import {BsFillFlagFill} from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import FE02TypicalChild from "../FE02Typical/TypicalChild/FE02TypicalChild";
import {Row, Col} from 'react-bootstrap'
import Fe07Header from "~/components/FE07_STSOFTWARE/Fe07Header/Fe07Header";
import {getAllDataFE02, getAllDataFE07Div1, getAllDataFE07Div2} from "~/service/Apiservice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import async from "async";

const Fe07_stsoftware = (props) => {
    const [listFe07, setListFe07] = useState([
        {
            id: "fe07-1",
            image: "https://stunited.vn/wp-content/uploads/2019/09/Capture.png"
            ,
            teamCaption: "eHealth",
            teamDesigner: "#ASP.NET #Android #iOS",
            teamCaptionHide: "A health data management application for " +
                "the personal healthcare in coordination with employers, pharmacies and medical examination providers."
        },
        {
            id: "fe07-2", image: "https://stunited.vn/wp-content/uploads/2019/09/image-logo-1.png"
            , teamCaption: "Havuta", teamDesigner: "#Blockchain #NodeJS #ReactJS #React Native",
            teamCaptionHide: "\n" +
                "                            Havuta brings smartphone and blockchain-based solutions to the data collection challenges facing the development sector. Creating a blockchain-based feedback loop benefiting NGOs, engaging their beneficiaries, and promoting transparency. "
        },
        {
            id: "fe07-3", image: "https://stunited.vn/wp-content/uploads/2019/09/figure01.jpg"
            , teamCaption: "E-ASPRO", teamDesigner: "#Javascript #HTML #CSS",
            teamCaptionHide: "E-ASPRO is a cloudtype fulfillment mail order solution that enables you to efficiently manage mail order operations such as site management," +
                " orders, shipping, inventory, and shipping inquiries from one system"
        },
        {
            id: "fe07-4",
            image: "https://stunited.vn/wp-content/uploads/2019/09/2e-jycg6_400x400.jpg"
            ,
            teamCaption: "Vision Express",
            teamDesigner: "#Chatbot #Javascript #HTML #CSS",
            teamCaptionHide: "Chatbot to communicate with users, reply questions automatically."
        },

    ])
    // const [listFe07, setListFe07] = useState([])
    // const [listContextFe07D1, setListContextFe07D1] = useState([
    //     {
    //         id: "fe07-1", icon: <BsFillFlagFill/>, title: "Web App Development",
    //         content: "We create beautifully designed web apps precisely tailored t" +
    //             "o your situationWe deliver web systems of any size and complexity — from budding startu" +
    //             "p products to hi-end enterprise solutions.",
    //         link: "see more"
    //     },
    //     {
    //         id: "fe07-2", icon: <BsFillFlagFill/>, title: "Mobile App Development",
    //         content: "ST provides custom mobile application development across different\n" +
    //             "platforms such as iOS and Android for consumer-facing and enterprise\n" +
    //             "environment.",
    //         link: "see more"
    //     },
    //     {
    //         id: "fe07-3", icon: <BsFillFlagFill/>, title: "Custom Software Development",
    //         content: "T provides high quality, cost-effective and reliable software development services match your specific needs, budget and timeframe." +
    //             " We love to competes with other firms on the grounds of quality, creativity, n’ dedication",
    //         link: "see more"
    //     }
    // ])
    // const [listContextFe07D2, setListContextFe07D2] = useState([
    //     {
    //         id: "fe07-4", icon: <FaUsers/>, title: "Dedicated Team",
    //         content: "Dedicated Team model of cooperation provides high-quality software development services for our clients. " +
    //             "Our Dedicated Teams offer clients a simple, affordable answer to build-up of any software development project." +
    //             " Team sizes are adjusted to accommodate changing requirements and other needs.",
    //         link: "see more"
    //     },
    //     {
    //         id: "fe07-5", icon: <BsFillFlagFill/>, title: "Technology Consulting",
    //         content: "Whether you are optimizing costs, rolling out new IT initiatives, or identifying new growth opportunities, ST offers" +
    //             " technology and software consulting services to help you respond to change and transform your business.",
    //         link: "see more"
    //     },
    //     {
    //         id: "fe07-6", icon: <BsFillFlagFill/>, title: "AI/Machine Learning",
    //         content: "Using the power of machine learning tools and technologies, our AI experts and development team offer " +
    //             "comprehensive and cutting-edge solutions to your current or potential business needs.",
    //         link: "Read more"
    //     }
    //
    // ])
    const [listContextFe07D1, setListContextFe07D1] = useState([])
    const [listContextFe07D2, setListContextFe07D2] = useState([])
    useEffect(() => {
        fetchListFE07Div1();
    }, [])
    const fetchListFE07Div1 = async () => {
        let res = await getAllDataFE07Div1();
        setListContextFe07D1(res);
    }
    useEffect(() => {
        fetchListFE02();
    }, [])
    const fetchListFE02 = async () => {
        let res = await getAllDataFE02();
        setListFe07(res);
    }
    useEffect(()=>{
        fetchListFE07Div2();
    },[])
    const fetchListFE07Div2 = async () =>{
        let res = await getAllDataFE07Div2();
        setListContextFe07D2(res);
    }
    return (
        <>
            <Row className="fe07-container">
                <Fe07Header/>
                <Col className="fe07-container__wpb">
                    <Row className="fe07-container__wpb__inner">
                        <Row className="fe07-blank">
                        </Row>
                        <Col className="fe07-context__wpb">
                            <Row className="fe07-context__wpb--block red">
                                {listContextFe07D1 && listContextFe07D1.map((item, index) => {
                                    return (
                                        <Col className="fe07-context__wpb--block--col" md={4} xs={12} key={item._id}>
                                            <Row className="fe07-context__wpb--block--item">
                                                <Col className="fe07-context__wpb--service">
                                                    <Row className="fe07-context__wpb--block--icon">
                                                        <BsFillFlagFill/>
                                                    </Row>
                                                    <Col className="fe07-context__wpb--block--content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.content}</p>
                                                        <a href="#">{item.link}</a>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                                }
                            </Row>
                        </Col>
                        <Row className="fe07-context__wpb">
                            <Row className="fe07-context__wpb--block red">
                                {listContextFe07D2 && listContextFe07D2.map((item, index) => {
                                    return (
                                        <Col className="fe07-context__wpb--block--col" md={4} xs={12} key={item.id}>
                                            <Row className="fe07-context__wpb--block--item">
                                                <Col className="fe07-context__wpb--service">
                                                    <Row className="fe07-context__wpb--block--icon">
                                                        {item.icon}
                                                    </Row>
                                                    <Col className="fe07-context__wpb--block--content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.content}</p>
                                                        <a href="#">{item.link}</a>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                                }
                            </Row>
                        </Row>
                        {/*/////////////////////////////*/}
                        <Col className="fe07-wpb__wrapper">
                            <Col className="fe07-textcenter">
                                <h2>
                                    Typical successful stories
                                </h2>
                                <h3>
                                    Meeting deadlines and ensuring high standards are our style of life.
                                    82% of our customers have chosen our team for their 2nd project.
                                </h3>
                            </Col>
                            <Col className="fe07-emptyspace"></Col>
                            <FE02TypicalChild
                                key={props.key}
                                listContainerFe02={listFe07}
                                SetListContainerFe02={setListFe07}
                            />
                        </Col>
                        <Row className="fe07-emptyspace" style={{height: "120px"}}>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Fe07_stsoftware;