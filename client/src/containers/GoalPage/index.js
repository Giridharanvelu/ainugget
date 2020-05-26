import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import AboutGoal from "../../components/AboutGoal";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import WhatWeOffer from "../../components/WhatWeOffer";

import shape3 from "../../images/shape3.png";

const GoalPage = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="Goal"
            />
            <AboutGoal/>
            <Grid className="contentSection">
                <Grid className="container" alignItems="center" container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Grid className="textContent tright">
                            <strong>PROFIT GRAPH</strong>
                            <h2>We gives you the best Financial solution</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</p>
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of text.</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid className="thumb tright">
                            <img src={shape3} alt="shape3"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <WhatWeOffer/>
            <OurAchievementsTwo/>
            <WorkInquiry/>
            <Footer/>
        </Fragment>
    )
};
export default GoalPage;