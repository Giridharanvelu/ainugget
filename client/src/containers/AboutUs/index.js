import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import WhatWeOfferThree from "../../components/WhatWeOfferThree";
import Testimonial from "../../components/Testimonial";
import OurTeam from "../../components/OurTeam";

import shape2 from "../../images/shape2.png";

class AboutUsPage extends React.Component {

    render() {

        return (
            <Fragment>
                <BreadCrumb
                    title="About Us"
                />
                <Grid className="contentSection">
                    <Grid className="container" alignItems="center" container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Grid className="thumb">
                                <img src={shape2} alt="shape2"/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid className="textContent">
                                <strong>WHO WE ARE</strong>
                                <h2>The Largest Business Expert</h2>
                                <p>From banking and insurance to wealth management and securities distribution, we
                                    dedicated financial services.</p>
                                <p>From banking and insurance to wealth management and securities distribution, we
                                    dedicated financial</p>
                                <p>From banking and insurance to wealth management and securities distribution, we
                                    dedicated financial</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <WhatWeOfferThree/>
                <OurTeam/>
                <OurAchievementsTwo/>
                <Testimonial version='two'/>
                <WorkInquiry/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutUsPage;