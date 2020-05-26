import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

import thumb1 from '../../images/team/teamimg1.jpg';
import thumb2 from '../../images/team/teamimg2.jpg';
import thumb3 from '../../images/team/teamimg3.jpg';

import './style.scss';

const ourteam = [
    {
        id: 1,
        thumb: thumb1,
        name: 'Jorge Cravens',
        profession: 'Founder and Chairman'
    },
    {
        id: 2,
        thumb: thumb2,
        name: 'Michael Howe',
        profession: 'CTO'
    },
    {
        id: 3,
        thumb: thumb3,
        name: 'Nancy Beatty',
        profession: 'Developer'
    },
];

const OurTeam = () => {
    return(
        <Grid className="ourTeamWrapper">
            <SectionTitle
                title="Leadership Team"
                subtitle="OUR PEOPLE"
            />
            <Grid className="container" container spacing={4}>
                {ourteam.map(item => {
                    return(
                        <Grid key={item.id} item xs={12} md={4} sm={6}>
                            <Grid className="sTeam">
                                <Grid className="thumb">
                                    <img src={item.thumb} alt="thumb"/>
                                </Grid>
                                <Grid className="content">
                                    <h2><Link to="/">{item.name}</Link></h2>
                                    <p>{item.profession}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
};

export default OurTeam;