import {FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import './PortforlioChild.scss'
import {Row, Col} from "react-bootstrap";


const PortforliolChild = (props) => {
   const {listContainer, SetListContainer } = props
    return(
        <div className="Portforlio-wpb__col-container row">
            {listContainer && listContainer.map((item, index) => {
                return (
                    <>
                        <Col className="Portforlio-wpb__col-context col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
                            <Col className="Portforlio-wpb__col-context__inner">
                                <Col className="Portforlio-wpb__col-context__inner__context">
                                    <Col className="Portforlio-wpb__col-context__inner__context__block">
                                        <a className="Portforlio-block"></a>
                                        <img src={item.image} alt="image"/>
                                        <Col className="Portforlio-wpb__caption--before">
                                            <Row className="Portforlio-wpb__caption__inner">
                                                <h4 className="Portforlio-wpb__caption__team--name">
                                                    <a>
                                                        {
                                                            item.teamCaption
                                                        }
                                                    </a>
                                                </h4>
                                                <p className="Portforlio-wpb__caption__team-designation">
                                                    {
                                                        item.teamDesigner
                                                    }
                                                </p>
                                                <ul className="Portforlio-wpb__caption__team-social" style={{padding:"0 0"}}>
                                                    <li>
                                                        <a target="_blank" href="https://www.facebook.com/stunited.vn" className="btn-facebook">
                                                            <FaFacebookSquare style={{borderRadius:"7px"}}/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link target="_blank" to="/" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{borderRadius:"7px"}}/>
                                                        </Link>
                                                    </li>
                                                </ul>

                                            </Row>
                                        </Col>
                                        <Col className="Portforlio-wpb__caption--after ">
                                            <Row className="Portforlio-wpb__caption__inner">
                                                <h4 className="Portforlio-wpb__caption__team--name">
                                                    <a>
                                                        {
                                                            item.teamCaption
                                                        }
                                                    </a>
                                                </h4>
                                                <p className="Portforlio-wpb__caption__team-designation">
                                                    {
                                                        item.teamDesigner
                                                    }
                                                </p>
                                                <p className="Portforlio-wpb__caption__team-descriptions">
                                                    {
                                                        item.teamCaptionHide
                                                    }
                                                </p>
                                                <ul className="Portforlio-wpb__caption__team-social" style={{padding:"0 0"}}>
                                                    <li>
                                                        <a target="_blank" href="https://www.facebook.com/stunited.vn" className="btn-facebook">
                                                            <FaFacebookSquare style={{borderRadius:"7px"}}/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link target="_blank" to="/" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{borderRadius:"7px"}}/>
                                                        </Link>
                                                    </li>
                                                </ul>

                                            </Row>

                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                    </>
                )
            })
            }
        </div>
    )
}
export default PortforliolChild