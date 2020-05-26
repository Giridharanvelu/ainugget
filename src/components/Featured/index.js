import React from 'react';
import {Grid} from "@material-ui/core";
import FontAwesome from "../UiStyle/FontAwesome";
import Slider from "react-slick";

import './style.scss';

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
};

export class Featured extends React.Component{

    nextHandler = () => {
        this.slider.slickNext();
    };
    prevHandler = () => {
        this.slider.slickPrev();
    };

    render() {
        const {className = '', featured} = this.props;
        return(
            <Grid className={`featuredWrapper ${className}`}>
                <Grid
                    container
                    spacing={8}
                    className="container"
                >
                    <Grid item xs={12}>
                        <Slider {...settings} ref={slider => (this.slider = slider)}>
                            {featured.map(item => {
                                return (
                                    <Grid key={item.id} className="featuredItem">
                                        <Grid className="icon" style={{background: `${item.code}`}}>
                                            <img src={item.icon} alt=""/>
                                        </Grid>
                                        <Grid className="content">
                                            <h2>{item.title}</h2>
                                            <p>Read More <FontAwesome name="angle-right"/></p>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Slider>
                        <ul className="fsNav">
                            <li onClick={this.prevHandler}><FontAwesome name="angle-left" /></li>
                            <li onClick={this.nextHandler}><FontAwesome name="angle-right" /></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Featured;