import {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import Fe07Header from '~/components/FE07_STSOFTWARE/Fe07Header/Fe07Header';
import FE02TypicalChild from '~/components/FE02Typical/TypicalChild/FE02TypicalChild';
import {getAllDataPortfolio} from "~/service/Apiservice";

const Portforlio = () => {
    const [backgroundImageFe07, SetBackgroundImageFe07] = useState(
        { id:'1', backGroundFe07:'https://drive.google.com/uc?export=view&id=12btms3s2HW8gMKW_F_cG6Wvrrb95-94y' },
    );
    const [bannerCaption, SetBannerCaption] = useState(
        {
            id: 'BnFe07',
            h1: 'ST PORTFOLIO',
            h2: 'From ideas turned into carefully crafted pixels and problems crafted into solutions.',
        },
    );
    const [list, setList] = useState([])
    useEffect(() => {
        fetchListPortfolio();
    }, [])
    const fetchListPortfolio = async () => {
        let res = await getAllDataPortfolio();
        setList(res);
    }
    return (
        <>
            <Row className="fe02-container" style={{ margin: '0' }}>
                <Fe07Header
                    backgroundImageFe07={backgroundImageFe07}
                    SetBackgroundImageFe07={SetBackgroundImageFe07}
                    bannerCaption={bannerCaption}
                    SetBannerCaption={SetBannerCaption}
                />
                <Col className="fe02-container__wpb">
                    <Row className="fe02-container__wpb__inner">
                        <Row className="fe02-wpb__wrapper">
                            <Col className="fe02-textcenter">
                                <h2>Typical successful stories</h2>
                                <h3>
                                    Meeting deadlines and ensuring high standards are our style of life. 82% of our
                                    customers have chosen our team for their 2nd project.
                                </h3>
                            </Col>
                            <div className="fe02-emptyspace"></div>
                            <Row
                                className="fe02-wpb__col-container"
                                style={{ padding: '0', margin: '0', justifyContent: 'left' }}
                            >
                                <FE02TypicalChild listContainerFe02={list} SetListContainerFe02={setList} />
                            </Row>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </>
    );
};
export default Portforlio;
