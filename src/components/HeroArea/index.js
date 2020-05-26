import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

// images
import bgShape1 from '../../images/bgshape1.png';
import Shape1 from '../../images/shape1.png';

import './style.scss';

class HeroArea extends Component {

    constructor () {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render(){
        return(
            <Grid className="heroAreaWapper">
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    className="container">
                    <Grid item xs={12} md={5}>
                        <Grid className="heroContent">
                            <strong>WE ARE HERE FOR</strong>
                            <h2>Giving Future to your Investment</h2>
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
                            <Link to="/about-us" className="cBtn">Learn More</Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid className="hrRighThumb">
                            <img src={Shape1} alt=""/>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="bgShape1" src={bgShape1} alt="shape"/>
            </Grid>
        )
    }
}

export default HeroArea;