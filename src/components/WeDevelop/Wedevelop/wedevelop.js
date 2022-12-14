import { useState } from "react";
import {Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./wedevelop.scss";

const Wedevelop = () => {
    const [list,setList] = useState
    ([
        {
            id:"wdl1",
            img: "https://stunited.vn/wp-content/uploads/2019/09/web-1-e1567826594877.png",
            title: "Web App Development",
            description: "We create beautifully designed web apps precisely tailored to your situationWe deliver web systems of any size and complexity — from budding startup products to hi-end enterprise solutions.",
            link: "See More",
        },
        {
            id:"wdl2",
            img: "https://stunited.vn/wp-content/uploads/2019/09/mobile-phone-blue-round-2-512-300x300.png",
            title: "Mobile App Development",
            description: " ST provides custom mobile application development across different"
            +"\n platforms such as iOS and Android for consumer-facing and enterprise"
            +"\n environment",
            link: "Read More",
        },
        {
            id:"wdl3",
            img: "https://stunited.vn/wp-content/uploads/2019/09/custome-300x300.png",
            title: "Custom Software Development",
            description: " ST provides high quality, cost-effective and reliable software development"
            +"services match your specific needs,budget and timeframe."
             + "We love to competes with other firms on the grounds of quality, creativity, n' dedication.",
            link: "Read More",
        },
        {
            id:"wdl4",
            img: "https://stunited.vn/wp-content/uploads/2019/09/team-icon-23-e1567826832234.png",
            title: "Dedicated Team",
            description: " Looking for the best resources to compliment your existing team?"
            +"Our talented developers are available to augment your team on a short or long term basis.",
            link: "Read More",
        },
        {
            id:"wdl5",
            img: "https://stunited.vn/wp-content/uploads/2019/09/marketing-300x300.png",
            title: "Digital Marketing"  ,
            description: " From establishing your online presence to increasing your influence on social, we use smart analytics to help you grow your business.",
            link: "Read More",
        },
        {
            id:"wdl6",
            img: "https://stunited.vn/wp-content/uploads/2019/09/startup--300x300.png",
            title: "Startup Incubation",
            description: "Our program provides a vast resources for entrepreneurs in Vietnam, focusing on ecosystem building, co-working spaces and incubation programs",
            link: "Read More",
        },

    ])
    return (
        <div className="wdl_container">	
            <Row className="cover--container">
                <Col className="children--container">
                    <Row className="children--cover">
                        <Col className="children--cover__col ">
                                <h2 className="title--wedevelop">
                                    WE DEVELOP | WE SUPPORT | WE IMPROVE
                                </h2>
                                <h3 className="subtitle--wedevelop">
                                    Launch your ideas. Execute your plans. Maximize project success.
                                </h3>                            
                        </Col>
                    </Row>
                    <Row className="service--container" >
                                {list && list.map((item,index) =>{
                                    return(
                                        <Col className="service--block" xs={12} md={4}>
                                            <Row className="service--icon">
                                                <img src={item.img}/>
                                            </Row>
                                            <Row className="service--content">
                                                <h3 className="service--title">  {item.title}</h3>
                                                <p className="service--desc"> {item.description}</p>
                                                <a  className="service--link" href= "#" > {item.link}</a>
                                            </Row>
                                        </Col>
                                    )})}
                    </Row>
                </Col>         
            </Row>
        </div>
    )
}

export default Wedevelop;