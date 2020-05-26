import React from 'react';
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

import img1 from "../../images/case-study/csimg1.jpg";
import img2 from "../../images/case-study/csimg2.jpg";
import img3 from "../../images/case-study/csimg3.jpg";

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
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page at its layout.',
    },
    {
        id: 2,
        thumb: img2,
        cat: 'Design',
        cat_bg: '#F05153',
        author: 'Claudia Mays',
        title: 'Business Leadership in South Africa’s 1994',
        created_at: '2 DAYS AGO',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.',
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
];

const RelatedCaseStudy = () => {
    return (
        <Grid className="caseWrapper relatedPost">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <h4 className="rlvttitle">Read more case studies below</h4>
                </Grid>
            </Grid>
            <Grid className="container" container spacing={4}>
                {case_studies.map(item => {
                    return (
                        <Grid item xs={12} md={4} sm={6}>
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
    )
};

export default RelatedCaseStudy;