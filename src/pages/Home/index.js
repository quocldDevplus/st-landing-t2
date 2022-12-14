import styles from './Home.module.scss';
/* import { Helmet } from 'react-helmet'; */
import classNames from 'classnames/bind';
/* import FE02Typical from "~/components/FE02Typical/FE02Typical";
import Partner from "~/components/Partners/partner"; */
import FE02Typical from '~/components/FE02Typical/FE02Typical';
import Partner from '~/components/Partners/partner';
import Wedevelop from '~/components/Wedevelop/wedevelop';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <FE02Typical />
            <Wedevelop />
            <Partner />
        </>
    );
}

export default Home;
