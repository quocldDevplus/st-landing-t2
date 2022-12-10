import styles from './Home.module.scss';
import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import FE02Typical from "~/components/FE02Typical/FE02Typical";
import Partner from "~/components/Partners/partner";


const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            {/*<Helmet>*/}
            {/*    <title>Pets - Products</title>*/}
            {/*    <meta name="description" content="Find all the best quality  products your pet may need"/>*/}
            {/*    <meta name="twitter:card" content="summary_large_image"/>*/}
            {/*    <meta name="twitter:site" content="@user"/>*/}
            {/*    <meta name="twitter:creator" content="@user"/>*/}
            {/*    <meta name="twitter:title" content="Pets - Products"/>*/}
            {/*    <meta name="twitter:description" content="Best Products for your pet"/>*/}
            {/*    <meta name="twitter:image" content="url_to_image"/>*/}
            {/*    <meta property="og:title" content="Pets - Products"/>*/}
            {/*    <meta property="og:description" content="Best Products for your pet"/>*/}
            {/*    <meta property="og:locale" content="en_US"/>*/}
            {/*    <meta property="og:type" content="article"/>*/}
            {/*    <meta property="fb:app_id" content="ID_APP_FACEBOOK"/>*/}
            {/*</Helmet>*/}
            <FE02Typical/>
            {/*<Partner/>*/}
        </>
    )
}

export default Home;
