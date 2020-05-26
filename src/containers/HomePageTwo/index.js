import React, {Fragment} from 'react';
import HeroArea from "../../components/HeroArea";
import FeaturedTwo from "../../components/FeaturedTwo";
import AboutUsSection from "../../components/AboutUsSection";
import WhatWeOfferTwo from "../../components/WhatWeOfferTwo";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import ProfitGraphSection from "../../components/ProfitGraphSection";
import BannerSection from "../../components/BannerSection";
import Testimonial from "../../components/Testimonial";
import BlogSectionTwo from "../../components/BlogSectionTwo";
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
];

const HomePageTwo = () => {
    return (
        <Fragment>
            <HeroArea/>
            <FeaturedTwo featured={featured}/>
            <AboutUsSection/>
            <WhatWeOfferTwo/>
            <OurAchievementsTwo/>
            <ProfitGraphSection/>
            <Testimonial version='two'/>
            <BannerSection/>
            <BlogSectionTwo/>
            <WorkInquiry/>
            <Footer/>
        </Fragment>
    )
};
export default HomePageTwo;