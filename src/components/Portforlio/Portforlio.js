import "./Portforlio.scss";
import { useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import PorforlioChild from "./PortforlioChild";
import {Row, Col} from "react-bootstrap";


const Portforlio = () => {
  const [list, setList] = useState([
    {
        id: "Portforlio-1",
        image: "https://stunited.vn/wp-content/uploads/2019/09/23231644_318666981946865_6078072518456896056_n.png",
        teamCaption: "Job4U",
        teamDesigner: "#Android #iOS #React Native #Elastic Search",
        teamCaptionHide:
          "Job4U Recruitment specialise in hospitality & customer service recruitment for clients across Ireland and the UK",
      },
      {
        id: "Portforlio-2",
        image: "https://stunited.vn/wp-content/uploads/2019/09/42711620_256520801555546_2207788626673139712_n.png",
        teamCaption: "IOT SPACE Management System",
        teamDesigner: "#PHP #Laravel",
        teamCaptionHide:
          "IOT Space is a coworking space that promotes creativity and nurtures knowledge. It's also a perfect place for entrepreneurial individuals to expand their professional networks.",
      },
      {
        id: "Portforlio-3",
        image: "https://stunited.vn/wp-content/uploads/2019/09/logo.png",
        teamCaption: "SaigonShip",
        teamDesigner: "#Javascript #React Native",
        teamCaptionHide:
          "Saigon Ship - A free application providing groundbreaking platform for delivery stuff. This application allows delivery and track orders (location, amount ...) assigned by management. Limiting omissions and increasing the performance of delivery staff.",
      },
      {
        id: "Portforlio-4",
        image:
          "https://stunited.vn/wp-content/uploads/2019/09/2e-jycg6_400x400.jpg",
        teamCaption: "Vision Express",
        teamDesigner: "#Chatbot #Javascript #HTML #CSS",
        teamCaptionHide:
          "Chatbot to communicate with users, reply questions automatically.",
      },
    {
      id: "Portforlio-5",
      image: "https://stunited.vn/wp-content/uploads/2019/09/Capture.png",
      teamCaption: "eHealth",
      teamDesigner: "#ASP.NET #Android #iOS",
      teamCaptionHide:
        "A health data management application for " +
        "the personal healthcare in coordination with employers, pharmacies and medical examination providers.",
    },
    {
      id: "Portforlio-6",
      image: "https://stunited.vn/wp-content/uploads/2019/09/image-logo-1.png",
      teamCaption: "Havuta",
      teamDesigner: "#Blockchain #NodeJS #ReactJS #React Native",
      teamCaptionHide:
        "\n" +
        "                            Havuta brings smartphone and blockchain-based solutions to the data collection challenges facing the development sector. Creating a blockchain-based feedback loop benefiting NGOs, engaging their beneficiaries, and promoting transparency. ",
    },
    {
      id: "Portforlio-7",
      image: "https://stunited.vn/wp-content/uploads/2019/09/figure01.jpg",
      teamCaption: "E-ASPRO",
      teamDesigner: "#Javascript #HTML #CSS",
      teamCaptionHide:
        "E-ASPRO is a cloudtype fulfillment mail order solution that enables you to efficiently manage mail order operations such as site management," +
        " orders, shipping, inventory, and shipping inquiries from one system",
    },
    {
        id: "Portforlio-8",
        image: "https://stunited.vn/wp-content/uploads/2019/09/56470415_376431942962476_981545862750535680_n.png",
        teamCaption: "Doptop",
        teamDesigner: "#PHP #Laravel #Java",
        teamCaptionHide:
          "A system to interact with Amazon API to manage selling products and tracking orders on Amazon.",
      },
      {
        id: "Portforlio-9",
        image: "https://stunited.vn/wp-content/uploads/2019/09/1540281897874-Logo.png",
        teamCaption: "Expense Planning System",
        teamDesigner: "#PHP #ReactJS #PosgreSQL",
        teamCaptionHide:
          "Planning expense for Mobifone in the middle provinces of Vietnam.",
      },
      {
        id: "Portforlio-10",
        image: "https://stunited.vn/wp-content/uploads/2019/09/sw.png",
        teamCaption: "Smile Work",
        teamDesigner: "#ReactJS #Javascript #HTML #CSS",
        teamCaptionHide:
          "It is a cloud ERP system that integrates back office operations efficiently with project balance management as the main focus.",
      },
      {
        id: "Portforlio-11",
        image: "https://stunited.vn/wp-content/uploads/2019/09/calling_logo.png",
        teamCaption: "Calling Talk",
        teamDesigner: "#PHP #Laravel #AWS #PostgreSQL",
        teamCaptionHide:
          "Web conferencing system specialized for sales. Optimal connection conductor design for sales and customer support situations. Support smooth communication with customers.",
      },
      {
        id: "Portforlio-12",
        image: "https://stunited.vn/wp-content/uploads/2019/09/10530859_677198819061743_293369131052499585_n.png",
        teamCaption: "English Gate",
        teamDesigner: "#PHP #Laravel #MySQL",
        teamCaptionHide:
          "Online English course and video learning.",
      },
      {
        id: "Portforlio-13",
        image: "https://stunited.vn/wp-content/uploads/2019/09/logo-solid.jpg",
        teamCaption: "Fred Hollows Foundation",
        teamDesigner: "#PHP #Drupal #MySQL",
        teamCaptionHide:
          "Website of Fred Hollows Foundation.",
      },
      {
        id: "Portforlio-14",
        image: "https://stunited.vn/wp-content/uploads/2019/09/0.jpg",
        teamCaption: "Coherent",
        teamDesigner: "#Javascript #ReactJS #.NET #Xamarin #NodeJS",
        teamCaptionHide:
          "Coherent uses technology and data to solve the toughest challenges that insurers and intermediaries face on a daily basis.",
      },
   
  ]);
 
  return (
    <>
      <Row className="Portforlio-container">
        <Row className="Portforlio-container__wpb">
          <Row className="Portforlio-container__wpb__inner">
            <Row className="Portforlio-wpb__wrapper">
              <Col className="Portforlio-textcenter">
                <h2>Typical successful stories</h2>
                <h3>
                  From ideas turned into carefully crafted pixels and problems
                  crafted into solutions.
                </h3>
              </Col>
              <Row className="Portforlio-emptyspace"></Row>
              <PorforlioChild
                listContainer={list}
                SetListContainer={setList}
              />
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
export default Portforlio;
