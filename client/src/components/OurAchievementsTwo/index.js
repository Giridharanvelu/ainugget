import React from 'react';
import Grid from "@material-ui/core/Grid";

import statistics from '../../images/statistics.png';
import employees from '../../images/employees.png';
import tie from '../../images/tie.png';

import './style.scss';
import SectionTitle from "../SectionTitle";

const achievements = [
    {
        id: 1,
        icon: statistics,
        title: '350+ Projects Done',
        color: '#DAD9F8'
    },
    {
        id: 2,
        icon: employees,
        title: '500+ Happy Clients',
        color: '#FFE4D3'
    },
    {
        id: 3,
        icon: tie,
        title: '750+ Team Experts',
        color: '#F9DADB'
    },
];

const OurAchievementsTwo = ({className = ''}) => {
    return (
        <Grid className={`ourAchievementsTwo ${className}`}>
            <SectionTitle
                title='Excellence Record'
                subtitle="OUR achievements"
                body="It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
            />
            <Grid className="container" container alignItems="center" spacing={4}>
                <Grid item xs={12}>
                    <Grid className="achvLists">
                        <Grid container spacing={4}>
                            {achievements.map(item => {
                                return (
                                    <Grid key={item.id} item xs={12} md={4} sm={6}>
                                        <Grid key={item.id} className="achvSingle">
                                            <Grid className="icon" style={{background: `${item.color}`}}>
                                                <img src={item.icon} alt="statistics"/>
                                            </Grid>
                                            <Grid className="content">
                                                <h4>{item.title}</h4>
                                            </Grid>
                                        </Grid>
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

export default OurAchievementsTwo;