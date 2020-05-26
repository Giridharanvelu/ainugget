import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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
];

const WhatWeOffer = () => {
    return(
        <Grid className="whatWeOffer">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <SectionTitle
                        subtitle="WHAT WE OFFER"
                        title="Explore Solutions"
                        body="From banking and insurance to wealth management and securities distribution, we dedicated financial services the teams
serve all major sectors."
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {weOffer.map(item => {
                            return(
                                <Grid key={item.id} item xs={12} md={4} sm={6}>
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
                    <div className="viewAll pt-50">
                        <Button className="cBtn"><Link to="/">View All Services</Link></Button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default WhatWeOffer;