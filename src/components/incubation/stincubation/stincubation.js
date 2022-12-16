import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './stincubation.scss';
import { Col, Row } from 'react-bootstrap';
import { incubationItems } from '~/constant';

const Stincubation = (props) => {
    return (
        <>
            {props.listStIncubation &&
                props.listStIncubation.map((item) => {
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
                                                    <a
                                                        className="fe02-wpb__caption__teamCaption"
                                                        href={item.linkheader}
                                                    >
                                                        {item.teamCaption}
                                                    </a>
                                                </h4>
                                                <p className="fe02-wpb__caption__team-designation">
                                                    {item.teamDesigner}
                                                </p>
                                                <ul
                                                    className="fe02-wpb__caption__team-social"
                                                    style={{ padding: '0 0' }}
                                                >
                                                    {incubationItems.map((incubationItem) =>
                                                        incubationItem.id === item._id
                                                            ? incubationItem.icons.map((icon) => (
                                                                  <li key={icon.id}>
                                                                      <a href={item.linkfb} className="btn-facebook">
                                                                          <i className={icon.icon} />
                                                                      </a>
                                                                  </li>
                                                              ))
                                                            : console.log('false check'),
                                                    )}
                                                </ul>
                                            </Row>
                                        </Col>
                                        <Col className="fe02-wpb__caption--after" key={item.id} md={3} xs={12}>
                                            <Row className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <a
                                                        className="fe02-wpb__caption__teamCaption"
                                                        href={item.linkheader}
                                                    >
                                                        {item.teamCaption}
                                                    </a>
                                                </h4>
                                                <NavLink className="fe02-wpb__caption__team-designation" to="">
                                                    {item.teamDesigner}
                                                </NavLink>
                                                <p className="fe02-wpb__caption__team-descriptions">
                                                    {item.teamCaptionHide}
                                                </p>
                                                <ul
                                                    className="fe02-wpb__caption__team-social"
                                                    style={{ padding: '0 0' }}
                                                >
                                                    {incubationItems.map((incubationItem) =>
                                                        incubationItem.id === item._id
                                                            ? incubationItem.icons.map((icon) => (
                                                                  <li key={icon.id}>
                                                                      <a href={icon.link} className="btn-facebook">
                                                                          <i className={icon.icon} />
                                                                      </a>
                                                                  </li>
                                                              ))
                                                            : console.log('false check'),
                                                    )}
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
export default Stincubation;
