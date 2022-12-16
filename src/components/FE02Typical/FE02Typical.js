import './FE02Typical.scss'
import {useEffect, useState} from "react";
import {getAllDataFE02} from "../../service/Apiservice"
import FE02TypicalChild from "./TypicalChild/FE02TypicalChild";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

const FE02Typical = () => {
    const [list, setList] = useState([])

    const fetchListFE02 =  () => {
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