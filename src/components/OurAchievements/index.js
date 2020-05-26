import React from 'react';
import Grid from "@material-ui/core/Grid";

import statistics from '../../images/statistics.png';

import './style.scss';

const achievements = [
    {
        id: 1,
        icon: statistics,
        title: '350+ Projects Done',
        color: '#DAD9F8'
    },
    {
        id: 2,
        icon: statistics,
        title: '500+ Happy Clients',
        color: '#FFE4D3'
    },
    {
        id: 3,
        icon: statistics,
        title: '750+ Team Experts',
        color: '#F9DADB'
    },
];

const OurAchievements = () => {
    return (
        <Grid className="ourAchievements">
            <Grid className="container" container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>OUR achievements</strong>
                        <h2>Excellence Record</h2>
                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks reasonable. </p>
                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks reasonable. </p>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="achvLists">
                        {achievements.map(item => {
                            return (
                                <Grid key={item.id} className={`achvSingle ${item.id === 2 ? 'secondItem' : ''}`}>
                                    <Grid className="icon" style={{background: `${item.color}`}}>
                                        <img src={item.icon} alt="statistics"/>
                                    </Grid>
                                    <Grid className="content">
                                        <h4>{item.title}</h4>
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

export default OurAchievements;