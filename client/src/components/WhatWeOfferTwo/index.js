import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import icon1 from '../../images/icon/store.png';
import icon2 from '../../images/icon/employee.png';
import icon3 from '../../images/icon/coins.png';

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
        thumb: icon3,
        title: 'Tax Planning',
        body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.'
    },
];

const WhatWeOfferTwo = () => {
    return (
        <Grid className="whatWeOfferTwo">
            <Grid className="container" alignItems="center" container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>WHAT WE OFFER</strong>
                        <h2>Explore Solutions</h2>
                        <p>From banking and insurance to wealth management and on securities distribution, we dedicated
                            financial services them the teams serve all major sectors.</p>
                        <p>Our work draws on more than 40 years of experience. They delivered by 5,700 professionals in
                            the world’s most important financial centers.</p>
                        <Button className="cBtn">View All Services</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {weOffer.splice(0, 2).map(item => {
                                return (
                                    <Grid key={item.id} className="wwItem">
                                        <Grid className="icon">
                                            <img src={item.thumb} alt="icon"/>
                                        </Grid>
                                        <div className="content">
                                            <h2>{item.title}</h2>
                                            <p>{item.body}</p>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {weOffer.map(item => {
                                return (
                                    <Grid key={item.id} className={`wwItem ${item.id === 3 ? 'hasmtop' : ''}`}>
                                        <Grid className="icon">
                                            <img src={item.thumb} alt="icon"/>
                                        </Grid>
                                        <div className="content">
                                            <h2>{item.title}</h2>
                                            <p>{item.body}</p>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default WhatWeOfferTwo;