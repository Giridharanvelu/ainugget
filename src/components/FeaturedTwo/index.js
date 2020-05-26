import React from 'react';
import {Grid} from "@material-ui/core";
import FontAwesome from "../UiStyle/FontAwesome";

import './style.scss';

export class FeaturedTwo extends React.Component {

    nextHandler = () => {
        this.slider.slickNext();
    };
    prevHandler = () => {
        this.slider.slickPrev();
    };

    render() {
        const {className = '', featured, lightVersion} = this.props;
        return (
            <Grid className={`featuredWrapper ${className}`}>
                <Grid
                    container
                    spacing={4}
                    className="container"
                >
                    {featured.map(item => {
                        return (
                            <Grid key={item.id} item xs={12} md={3} sm={6}>
                                <Grid key={item.id} className="featuredItem2">
                                    <Grid className="icon"
                                          style={{background: `${lightVersion ? item.code : 'transparent'}`}}>
                                        <img src={item.icon} alt=""/>
                                    </Grid>
                                    <Grid className="content">
                                        <h2>{item.title}</h2>
                                        <p>Read More <FontAwesome name="angle-right"/></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        )
    }
}

export default FeaturedTwo;