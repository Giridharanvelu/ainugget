import React from 'react';
import {Grid} from "@material-ui/core";
import shape2 from '../../images/shape2.png';

const AboutUsSection = () => {
    return (
        <Grid className="contentSection">
            <Grid className="container" alignItems="center" container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="thumb">
                        <img src={shape2} alt="shape2"/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>ABOUT US</strong>
                        <h2>The Largest Business Expert</h2>
                        <p>From banking and insurance to wealth management and securities distribution, we dedicated
                            financial services.</p>
                        <p>From banking and insurance to wealth management and securities distribution, we dedicated
                            financial</p>
                        <p>From banking and insurance to wealth management and securities distribution, we dedicated
                            financial</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AboutUsSection;