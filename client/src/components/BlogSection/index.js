import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";

import blogPostsImg1 from '../../images/blog/blog-post1.jpg';
import blogPostsImg2 from '../../images/blog/blog-post2.jpg';
import blogPostsImg3 from '../../images/blog/blog-post3.jpg';

import './style.scss';
import {Link} from "react-router-dom";

const blogLists = [
    {
        id: 1,
        thumb: blogPostsImg1,
        title: 'US Treasury yields lower amid trade turmoil',
        author: 'By Rashedul islam',
        created_at: '3 HOURS AGO',
    },
    {
        id: 2,
        thumb: blogPostsImg2,
        title: 'Manhattan real estate prices take the biggest tumble',
        author: 'By Rashedul islam',
        created_at: '5 HOURS AGO',
    },
    {
        id: 3,
        thumb: blogPostsImg3,
        title: 'Europe will face more economic ‘pain’ if US limits',
        author: 'By Rashedul islam',
        created_at: '9 HOURS AGO',
    },
];

const BlogSection = () => {
    return (
        <Grid className="blogSection">
            <SectionTitle
                title="Visit Our Company Insite "
                subtitle="WE ARE HERE"
            />
            <Grid container className="container" spacing={4}>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {blogLists.map(item => {
                            return (
                                <Grid item xs={12} md={4} sm={6} key={item.id}>
                                    <Grid className="singleBlog">
                                        <Grid className="thumb">
                                            <img src={item.thumb} alt=""/>
                                        </Grid>
                                        <Grid className="content">
                                            <h4><Link to="/single-blog/1">{item.title}</Link></h4>
                                            <p>PUBLISHED {item.created_at}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};
export default BlogSection;
