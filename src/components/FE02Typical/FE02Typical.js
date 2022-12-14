import './FE02Typical.scss'
import {useEffect, useState} from "react";
import {getAllDataFE02} from "../../service/Apiservice"
import {FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import FE02TypicalChild from "./TypicalChild/FE02TypicalChild";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

const FE02Typical = () => {
    // const [list, setList] = useState([
    //     {
    //         id: "fe02-1",
    //         image: "https://stunited.vn/wp-content/uploads/2019/09/Capture.png"
    //         ,
    //         teamCaption: "eHealth",
    //         teamDesigner: "#ASP.NET #Android #iOS",
    //         teamCaptionHide: "A health data management application for " +
    //             "the personal healthcare in coordination with employers, pharmacies and medical examination providers."
    //     },
    //     {
    //         id: "fe02-2", image: "https://stunited.vn/wp-content/uploads/2019/09/image-logo-1.png"
    //         , teamCaption: "Havuta", teamDesigner: "#Blockchain #NodeJS #ReactJS #React Native",
    //         teamCaptionHide: "\n" +
    //             "                            Havuta brings smartphone and blockchain-based solutions to the data collection challenges facing the development sector. Creating a blockchain-based feedback loop benefiting NGOs, engaging their beneficiaries, and promoting transparency. "
    //     },
    //     {
    //         id: "fe02-3", image: "https://stunited.vn/wp-content/uploads/2019/09/figure01.jpg"
    //         , teamCaption: "E-ASPRO", teamDesigner: "#Javascript #HTML #CSS",
    //         teamCaptionHide: "E-ASPRO is a cloudtype fulfillment mail order solution that enables you to efficiently manage mail order operations such as site management," +
    //             " orders, shipping, inventory, and shipping inquiries from one system"
    //     },
    //     {
    //         id: "fe02-4",
    //         image: "https://stunited.vn/wp-content/uploads/2019/09/2e-jycg6_400x400.jpg"
    //         ,
    //         teamCaption: "Vision Express",
    //         teamDesigner: "#Chatbot #Javascript #HTML #CSS",
    //         teamCaptionHide: "Chatbot to communicate with users, reply questions automatically."
    //     },
    // ])
    const [list, setList] = useState([])

    const fetchListFE02 =  () => {
        // axios.get(`http://localhost:8000/fe02-typical`)
        //     .then(res => {
        //         setList(res.data);
        //     })
        return getAllDataFE02().then((body) => {
            setList(body)
        });
    }
    useEffect ( () =>{
        fetchListFE02();
    },[])
return (
    <>
        <Row className="fe02-container" style={{margin:"0"}}>
            <Col className="fe02-container__wpb">
                <Row className="fe02-container__wpb__inner">
                    <Row className="fe02-wpb__wrapper">
                        <Col className="fe02-textcenter">
                            <h2>
                                Typical successful stories
                            </h2>
                            <h3>
                                From ideas turned into carefully crafted pixels and problems crafted into solutions.
                            </h3>
                        </Col>
                        <div className="fe02-emptyspace"></div>
                        <Row className="fe02-wpb__col-container" style={{padding:"0",margin:"0"}}>
                            <FE02TypicalChild
                                listContainerFe02={list}
                                SetListContainerFe02={setList}
                            />
                        </Row>
                    </Row>
                </Row>
            </Col>
        </Row>
    </>
)
}
export default FE02Typical