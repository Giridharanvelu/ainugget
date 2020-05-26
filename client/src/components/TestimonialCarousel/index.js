import React from 'react';
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import Hidden from "@material-ui/core/Hidden";

// images
import thumb from '../../images/tstthumb.jpg';

import './style.scss';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
};

const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
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

class TestimonialCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <Grid className="testimonialCarousel">
                <Grid container className="container">
                    <Hidden smDown><Grid item md={1}></Grid></Hidden>
                    <Grid item xs={12} md={10}>
                        <Slider
                            className="tstCarousel"
                            {...settings}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            {testimonials.map(item => {
                                return (
                                    <Grid key={item.id} className="tstItem">
                                        <p>{item.body}</p>
                                        <Grid className="tstAuthor">
                                            <h4>{item.name}</h4>
                                            <strong>{item.profession}</strong>
                                        </Grid>
                                    </Grid>

                                )
                            })}
                        </Slider>
                        <Grid className="arrowSliderWrapper">
                            <Slider
                                className="arrowSlider"
                                {...settings2}
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                            >
                                {testimonials.map(item => {
                                    return (
                                        <Grid key={item.id}>
                                            <Grid className="avatar">
                                                <img src={item.thumb} alt="user thumb"/>
                                            </Grid>
                                        </Grid>
                                    )
                                })}
                            </Slider>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default TestimonialCarousel;