import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import ErrorImage from '../../images/404.png';

import './style.scss';

const ErrorPage = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="Sorry, Page not found"
            />
            <Grid className="container errorWrapper">
                <img src={ErrorImage} alt="ErrorImage"/>
                <Button component={Link} to="/home" className="cBtn">BACK TO HOME PAGE</Button>
            </Grid>
            <Footer/>
        </Fragment>
    )
};
export default ErrorPage;