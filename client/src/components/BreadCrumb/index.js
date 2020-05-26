import React from 'react';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import bgShape2 from '../../images/bgshape2.png';

import './style.scss';

const BreadCrumb = ({title, className=''}) => {
    return(
        <Grid className="breadCrumb">
            <Grid container className="container">
                <Hidden smDown><Grid item xs={12} md={2}/></Hidden>
                <Grid item xs={12} md={8}>
                    <Grid className={`breadCrumbContent ${className}`}>
                        <h2>{title}</h2>
                    </Grid>
                </Grid>
            </Grid>
            <img className="bgShape2" src={bgShape2} alt="shape"/>
        </Grid>
    )
};

export default BreadCrumb;