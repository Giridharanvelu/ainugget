import React, {Fragment} from 'react';
import HeroArea from "../../components/HeroArea";
import Featured from "../../components/Featured";
import WhatWeOffer from "../../components/WhatWeOffer";
import ContentSection from "../../components/ContentSection";
import WorkInquiry from "../../components/WorkInquiry";
import OurAchievements from "../../components/OurAchievements";
import HightchartMap from "../../components/HightchartMap";
import Testimonial from "../../components/Testimonial";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/Footer";

import icon1 from "../../images/icon/feature-icon1.png";
import icon2 from "../../images/icon/feature-icon2.png";
import icon3 from "../../images/icon/feature-icon3.png";
import icon4 from "../../images/icon/feature-icon4.png";

const featured = [
    {
        id: 1,
        icon: icon1,
        title: 'Best Financial Advice',
        code: '#DAD9F8'
    },
    {
        id: 2,
        icon: icon2,
        title: 'Authorised Finance Brand',
        code: '#FFE4D3'
    },
    {
        id: 3,
        icon: icon3,
        title: 'Compehensive Advices',
        code: '#FCDCDD'
    },
    {
        id: 4,
        icon: icon4,
        title: 'The Tax Advantages',
        code: '#E0FCF9'
    },
    {
        id: 5,
        icon: icon3,
        title: 'The Tax Advantages',
        code: '#FCDCDD'
    },
];

const HomePage = () => {
    return (
        <Fragment>
            <HeroArea/>
            <Featured featured={featured}/>
            <WhatWeOffer/>
            <ContentSection/>
            <WorkInquiry/>
            <OurAchievements/>
            <HightchartMap/>
            <Testimonial/>
            <BlogSection/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;