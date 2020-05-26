import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import icon1 from '../../images/icon/store.png';
import icon2 from '../../images/icon/employee.png';
import icon3 from '../../images/icon/coins.png';
import icon4 from '../../images/icon/icon4.png';
import icon5 from '../../images/icon/icon5.png';
import icon6 from '../../images/icon/icon6.png';

import './style.scss';

const weOffer = [
    {
        id: 1,
        thumb: icon1,
        title: 'Estate Planning',
        body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.'
    },
    {
        id: 2,
        thumb: icon2,
        title: 'Retirement Plan',
        body: 'A Latin professor at Hampden-Sydney College in Virginia, looked up one of the.'
    },
    {
        id: 3,
        thumb: icon3,
        title: 'Tax Planning',
        body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.'
    },
    {
        id: 4,
        thumb: icon4,
        title: 'Saving Strategy',
        body: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.'
    },
    {
        id: 5,
        thumb: icon5,
        title: 'Health Insurance',
        body: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.'
    },
    {
        id: 6,
        thumb: icon6,
        title: 'Education Loan',
        body: 'If you are going to use a passage of Lorem Ipsum,   hidden in the middle of text.'
    },
];

const WhatWeOfferThree = () => {
    return (
        <Grid className="whatWeOfferTwo">
            <Grid className="container" alignItems="center" container spacing={4}>
                <Hidden smDown><Grid item sm={2}></Grid></Hidden>
                <Grid item xs={12} md={8}>
                    <SectionTitle
                        title="Explore Solutions"
                        subtitle="WHAT WE OFFER"
                        body="From banking and insurance to wealth management and securities distribution, we dedicated financial services the teams serve all major sectors."
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {weOffer.map(item => {
                            return (
                                <Grid item xs={12} md={4} sm={6} key={item.id}>
                                    <Grid className="wwItem">
                                        <Grid className="icon">
                                            <img src={item.thumb} alt="icon"/>
                                        </Grid>
                                        <div className="content">
                                            <h2>{item.title}</h2>
                                            <p>{item.body}</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default WhatWeOfferThree;