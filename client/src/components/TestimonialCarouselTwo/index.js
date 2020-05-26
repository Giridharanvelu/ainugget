import React from 'react';
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";

// images
import thumb from '../../images/tstthumb.jpg';
import cornerShape from '../../images/icon/corner-shape.png';

import './style.scss';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

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
];

const TestimonialCarouselTwo = () => {
    return (
        <Grid className="testimonialCarouselTwo">
            <Grid container className="container" spacing={4}>
                <Grid item xs={12}>
                    <Slider {...settings} >
                        {testimonials.map(item => {
                            return (
                                <Grid key={item.id} className="s2Tst">
                                    <p>{item.body} <img className="cornerShape" src={cornerShape} alt="cornerShape"/></p>
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
                            )
                        })}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default TestimonialCarouselTwo;