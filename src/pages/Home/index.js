import './Home.module.scss';
/* import { Helmet } from 'react-helmet'; */
import classNames from 'classnames/bind';
import FE02Typical from '~/components/FE02Typical/FE02Typical';
import Partner from '~/components/Partners/partner';
import Banner from '~/components/Banner';

function Home() {
    return (
        <>
            <Banner />
            <FE02Typical />
            <Partner />
        </>
    );
}

export default Home;
