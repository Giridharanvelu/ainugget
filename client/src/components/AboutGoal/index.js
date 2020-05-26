import React from 'react';
import {Grid} from "@material-ui/core";
import shape2 from '../../images/shape2.png';

const AboutGoal = () => {
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
                        <strong>GOAL STATEMENT</strong>
                        <h2>The Power of Optimism</h2>
                        <h4>Extra benefit through Invest</h4>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                            and demoralized by the charms of pleasure of the moment so blinded by desire.</p>
                        <h4>Expand profit and reduce Tax</h4>
                        <p>That they cannot foresee the pain and trouble that are bound to ensue. The equal blame
                            belongs to those who fail in their duty through weakness.</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AboutGoal;