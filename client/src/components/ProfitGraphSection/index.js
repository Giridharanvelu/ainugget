import React from 'react';
import {Grid} from "@material-ui/core";
import shape3 from '../../images/shape3.png';

const ProfitGraphSection = () => {
    return (
        <Grid className="contentSection">
            <Grid className="container" alignItems="center" container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent tright">
                        <strong>PROFIT GRAPH</strong>
                        <h2>We gives you the best Financial solution</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable.</p>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.</p>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="thumb tright">
                        <img src={shape3} alt="shape3"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default ProfitGraphSection;