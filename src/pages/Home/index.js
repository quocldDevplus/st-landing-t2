import './Home.module.scss';
/* import { Helmet } from 'react-helmet'; */
import classNames from 'classnames/bind';
/* import FE02Typical from "~/components/FE02Typical/FE02Typical";
import Partner from "~/components/Partners/partner"; */
import FE02Typical from '~/components/FE02Typical/FE02Typical';
import Partner from '~/components/Partners/partner';
<<<<<<< HEAD
import Wedevelop from '~/components/Wedevelop/wedevelop';

const cx = classNames.bind(styles);
=======
import Banner from '~/components/Banner';
>>>>>>> feature_quocle/banner-building

function Home() {
    return (
        <>
            <Banner />
            <FE02Typical />
            <Wedevelop />
            <Partner />
        </>
    );
}

export default Home;
