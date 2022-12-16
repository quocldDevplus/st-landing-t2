import './Home.module.scss';
/* import { Helmet } from 'react-helmet'; */
/* import FE02Typical from "~/components/FE02Typical/FE02Typical";
import Partner from "~/components/Partners/partner"; */
import FE02Typical from '~/components/FE02Typical/FE02Typical';
import Partner from '~/components/Partners/partner';
import Wedevelop from '~/components/Wedevelop/wedevelop';
import Banner from '~/components/Banner';

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
