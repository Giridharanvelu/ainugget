import React from 'react';
import {Switch} from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import HomePageTwo from "../HomePageTwo";
import HomePageThree from "../HomePageThree";
import GoalPage from "../GoalPage";
import CareerPage from "../CareerPage";
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";
import CaseStudy from "../CaseStudy";
import SingleCaseStudy from "../SingleCaseStudy";
import QuotesPage from "../QuotesPage";
import BlogPage from "../BlogPage";
import BlogDetails from '../BlogDetails';
import AboutUsPage from "../AboutUs";
import FaqPage from "../FaqPage";
import ContactUsPage from "../ContactUsPage";
import ErrorPage from "../ErrorPage";

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                path="/home"
                component={HomePage}
            />
            <PrivateRoute
                path="/home2"
                component={HomePageTwo}
            />
            <PrivateRoute
                path="/home3"
                component={HomePageThree}
            />
            <PrivateRoute
                path="/goal"
                component={GoalPage}
            />
            <PrivateRoute
                path="/career"
                component={CareerPage}
            />
            <PrivateRoute
                path="/case-study"
                component={CaseStudy}
            />
            <PrivateRoute
                path="/single-case-study/:id"
                component={SingleCaseStudy}
            />
            <PrivateRoute
                path="/quotes"
                component={QuotesPage}
            />
            <PrivateRoute
                path="/blog"
                component={BlogPage}
            />
            <PrivateRoute
                path="/single-blog/:id"
                component={BlogDetails}
            />
            <PrivateRoute
                path="/about-us"
                component={AboutUsPage}
            />
            <PrivateRoute
                path="/faq"
                component={FaqPage}
            />
            <PrivateRoute
                path="/contact-us"
                component={ContactUsPage}
            />
            <PrivateRoute
                exact
                component={ErrorPage}
            />
        </Switch>
    );
}
