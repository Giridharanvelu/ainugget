import React from 'react';
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import thumb1 from "../../images/blog/blog-post4.jpg";
import thumb2 from "../../images/blog/blog-post5.jpg";
import thumb3 from "../../images/blog/blog-post6.jpg";

import './style.scss';

const blog = [
    {
        id: 1,
        thumb: thumb1,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'A wonderful serenity has taken possession',
        body: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
    {
        id: 2,
        thumb: thumb2,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'The languages only differ in their grammar',
        body: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
    {
        id: 3,
        thumb: thumb3,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'Benefit through Invest by your money',
        body: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
];

const SimilarBlogs = () => {
    return (
        <Grid className="similarPost">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <h4 className="rlvttitle">Read Similar Blogs</h4>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {blog.map(item => {
                            return (
                                <Grid item xs={12} md={4} key={item.id}>
                                    <Grid className="singleBlog">
                                        <Grid className="thumb">
                                            <img src={item.thumb} alt=""/>
                                        </Grid>
                                        <Grid className="content">
                                            <p className="mb-20"><strong>Oscar White
                                                | </strong>PUBLISHED {item.created_at}</p>
                                            <h4><Link to={`/single-blog/${item.id}`}>{item.title}</Link></h4>
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

export default SimilarBlogs;