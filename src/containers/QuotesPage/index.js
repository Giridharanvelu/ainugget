import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";

import './style.scss';
import thumb from "../../images/tstthumb.jpg";
import cornerShape from "../../images/icon/corner-shape.png";

const testimonials = [
    {
        id: 1,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'CEO',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 2,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Frontend developer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 3,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 4,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 5,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 6,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 7,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 8,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 9,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
];

const QuotesPage = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="quotes"
            />
            <Grid className="testimonialCarouselTwo quotesWrapper">
                <Grid container className="container" spacing={4}>
                    {testimonials.map(item => {
                        return (
                            <Grid key={item.id} item xs={12} md={4} sm={6}>
                                <Grid className="s2Tst">
                                    <p>{item.body} <img className="cornerShape" src={cornerShape} alt="cornerShape"/>
                                    </p>
                                    <Grid className="tstMeta">
                                        <Grid className="thumb">
                                            <img src={item.thumb} alt="user thumb"/>
                                        </Grid>
                                        <Grid className="content">
                                            <h4>{item.name}</h4>
                                            <p>{item.profession}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            <OurAchievementsTwo/>
            <WorkInquiry/>
            <Footer/>
        </Fragment>
    )
};
export default QuotesPage;