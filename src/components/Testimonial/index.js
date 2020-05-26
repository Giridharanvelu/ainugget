import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../SectionTitle";
import TestimonialCarouselTwo from "../TestimonialCarouselTwo";
import TestimonialCarousel from "../TestimonialCarousel";

import Quotation from '../../images/quotation-marks.png';

import './style.scss';

const Testimonial = ({version, className = ''}) => {
    return (
        <Grid className={`testimonialWrapper ${className}`}>
            <img className="quotation" src={Quotation} alt="quotation"/>
            <SectionTitle
                subtitle="Testimonial"
                title="What Clients Are Saying"
            />
            {version === 'two' ? <TestimonialCarouselTwo/> : <TestimonialCarousel/>}
        </Grid>
    )
};

export default Testimonial;