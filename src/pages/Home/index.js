import styles from './Home.module.scss';
/* import { Helmet } from 'react-helmet'; */
import classNames from 'classnames/bind';
import FE02Typical from '~/components/FE02Typical/FE02Typical';
import Partner from '~/components/Partners/partner';
import Wedevelop from '~/components/Wedevelop/wedevelop';
/* import FE02Typical from "~/components/FE02Typical/FE02Typical";
import Partner from "~/components/Partners/partner"; */

function Home() {
    return (
        <>
            <FE02Typical />
            <Wedevelop />
            <Partner />
            =======
            <FE02Typical />
            <Partner />
        </>
    );
}

export default Home;
