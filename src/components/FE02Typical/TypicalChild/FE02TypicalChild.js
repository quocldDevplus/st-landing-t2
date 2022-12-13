import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './FE02TypicalChild.scss';
import { Col, Row } from 'react-bootstrap';

const FE02TypicalChild = (props) => {
    return (
        <>
            {props.listContainerFe02 &&
                props.listContainerFe02.map((item) => {
                    return (
                        <Col key={item._id} className="fe02-wpb__col-context" md={3} xs={12}>
                            <Row className="fe02-wpb__col-context__inner">
                                <Col className="fe02-wpb__col-context__inner__context">
                                    <Col className="fe02-wpb__col-context__inner__context__block">
                                        <a className="fe02-block"></a>
                                        <img src={item.image} alt="image" />
                                        <Col className="fe02-wpb__caption--before">
                                            <Row className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <NavLink className="fe02-wpb__caption__teamCaption" to="">
                                                        {item.teamCaption}
                                                    </NavLink>
                                                </h4>
                                                <p className="fe02-wpb__caption__team-designation">
                                                    {item.teamDesigner}
                                                </p>
                                                <ul
                                                    className="fe02-wpb__caption__team-social"
                                                    style={{ padding: '0 0' }}
                                                >
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.facebook.com/stunited.vn"
                                                            className="btn-facebook"
                                                        >
                                                            <FaFacebookSquare style={{ borderRadius: '7px' }} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{ borderRadius: '7px' }} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Row>
                                        </Col>
                                        <Col className="fe02-wpb__caption--after" key={item.id} md={3} xs={12}>
                                            <Row className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <NavLink className="fe02-wpb__caption__teamCaption" to="/">
                                                        {item.teamCaption}
                                                    </NavLink>
                                                </h4>
                                                <NavLink className="fe02-wpb__caption__team-designation" to="/">
                                                    {item.teamDesigner}
                                                </NavLink>
                                                <p className="fe02-wpb__caption__team-descriptions">
                                                    {item.teamCaptionHide}
                                                </p>
                                                <ul
                                                    className="fe02-wpb__caption__team-social"
                                                    style={{ padding: '0 0' }}
                                                >
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.facebook.com/stunited.vn"
                                                            className="btn-facebook"
                                                        >
                                                            <FaFacebookSquare style={{ borderRadius: '7px' }} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{ borderRadius: '7px' }} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    );
                })}
        </>
    );
};
export default FE02TypicalChild;
