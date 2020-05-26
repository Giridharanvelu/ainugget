import React from 'react';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import './style.scss';

const WorkInquiry = ({className}) => {
    return(
        <Grid className="workInquiry">
            <Grid className={`container ${className}`} container spacing={4}>
                <Hidden smDown><Grid item xs={12} md={1}></Grid></Hidden>
                <Grid item xs={12} md={10}>
                    <Grid className="textContent">
                        <strong>WE ARE THE BEST</strong>
                        <h2>We has been giving best consultation to top USA’s Finance companies since 1985</h2>
                        <Link to="/contact-us" className="cBtn">Work with us</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default WorkInquiry;