import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import SectionTitle from "../../components/SectionTitle";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

// image
import img1 from '../../images/case-study/csimg1.jpg';
import img2 from '../../images/case-study/csimg2.jpg';
import img3 from '../../images/case-study/csimg3.jpg';
import img4 from '../../images/case-study/csimg4.jpg';
import img5 from '../../images/case-study/csimg5.jpg';
import img6 from '../../images/case-study/csimg6.jpg';

import './style.scss';

const case_studies = [
    {
        id: 1,
        thumb: img1,
        cat: 'Finance',
        cat_bg: '#4640DD',
        author: 'Oscar White',
        title: 'Business Leadership in South Africa’s 1994',
        created_at: '2 DAYS AGO',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 2,
        thumb: img2,
        cat: 'Design',
        cat_bg: '#F05153',
        author: 'Claudia Mays',
        title: 'Business Leadership in South Africa’s 1994',
        created_at: '2 DAYS AGO',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 3,
        thumb: img3,
        cat: 'Economy',
        cat_bg: '#FE7A25',
        author: 'Dorothy Hernandez',
        title: 'Ethical Company Struggles to Insure The Chain',
        created_at: '5 DAYS AGO',
        body: 'So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.',
    },
    {
        id: 4,
        thumb: img4,
        cat: 'Business',
        cat_bg: '#FE7A25',
        author: 'Billie Romeo',
        title: 'The Integrity of Its Supply Chain Ethical',
        created_at: '1 WEEKS AGO',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 5,
        thumb: img5,
        cat: 'Corporate',
        cat_bg: '#F05153',
        author: 'James Perez',
        title: 'IBM Corporate Service Corps 2019',
        created_at: '2 WEEKS AGO',
        body: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.',
    },
    {
        id: 6,
        thumb: img6,
        cat: 'Work',
        cat_bg: '#4640DD',
        author: 'Larry Gonzales',
        title: 'Creating New Corporate Responsibility',
        created_at: '3 WEEKS AGO',
        body: 'So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.',
    },
];

const CaseStudy = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="case study"
            />
            <Grid className="caseWrapper">
                <SectionTitle
                    subtitle="TIME ISN'T THE MAIN THING"
                    title="Business leaders have the power childcare a top priority."
                />
                <Grid className="container" container spacing={4}>
                    {case_studies.map(item => {
                        return (
                            <Grid key={item.id} item xs={12} md={4} sm={6}>
                                <Grid className="singleBlog">
                                    <Grid className="thumb">
                                        <img src={item.thumb} alt="thumb"/>
                                        <Link style={{background: item.cat_bg}} className="cat" to="/">{item.cat}</Link>
                                    </Grid>
                                    <Grid className="content">
                                        <p><strong>{item.author} | </strong> PUBLISHED {item.created_at}</p>
                                        <h4><Link to={`/single-case-study/${item.id}`}>{item.title}</Link></h4>
                                        <p className="text">{item.body}</p>
                                        <Button className="cBtn">READ FULL</Button>
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
export default CaseStudy;