//Layouts
import Home from '~/pages/Home';
import WhoWeAre from '~/pages/WhoWeAre';
<<<<<<< HEAD
import Portfolio from '~/pages/Portfolio';
import stSoftWare from '~/pages/stSoftWare/StSoftWare';
import JoinUs from '~/pages/JoinUs/JoinUs';
import PageIncubation from '~/pages/WhatWeDo/StIncubation';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-software', component: stSoftWare },
    { path: '/st-digital', component: WhoWeAre },
    { path: '/st-incubation', component: PageIncubation },
=======
import Portfolio from "~/pages/Portfolio";
import stSoftWare from "~/pages/stSoftWare/StSoftWare";
import JoinUs from "~/pages/JoinUs/JoinUs";
import StDigitalPage from "~/pages/StDigital/StDigital";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-software', component: stSoftWare },
    { path: '/st-digital', component: StDigitalPage },
    { path: '/st-incubation', component: WhoWeAre },
>>>>>>> d25f6d83e0a103ef12ffe159b13b0774cf631fe8
    { path: '/who-we-are', component: WhoWeAre },
    { path: '/portfolio', component: Portfolio },
    { path: '/join-us', component: JoinUs },
    { path: '/lets-talk', component: WhoWeAre },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
