import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

import blogPostsImg1 from '../../images/blog/blog-post1.jpg';
import blogPostsImg2 from '../../images/blog/blog-post2.jpg';
import blogPostsImg3 from '../../images/blog/blog-post3.jpg';

const blogLists = [
    {
        id: 1,
        thumb: blogPostsImg1,
        title: 'US Treasury yields lower amid trade turmoil',
        author: 'By Rashedul islam',
        created_at: '3 HOURS AGO',
        tag: [
            {
                title: 'Finance',
                text_color: '#4640DD',
                bg_color: '#DAD9F8',
            },
            {
                title: 'Tread',
                text_color: '#FE7A25',
                bg_color: '#FFE4D3',
            },
        ],
    },
    {
        id: 2,
        thumb: blogPostsImg2,
        title: 'Manhattan real estate prices take the biggest tumble',
        author: 'By Rashedul islam',
        created_at: '5 HOURS AGO',
        tag: [
            {
                title: 'Real Estate',
                text_color: '#FE7A25',
                bg_color: '#FCDCDD',
            },
        ],
    },
    {
        id: 3,
        thumb: blogPostsImg3,
        title: 'Europe will face more economic ‘pain’ if US limits',
        author: 'By Rashedul islam',
        created_at: '9 HOURS AGO',
        tag: [
            {
                title: 'Economy',
                text_color: '#65F0E3',
                bg_color: '#E0FCF9',
            },
            {
                title: 'Business',
                text_color: '#4640DD',
                bg_color: '#DAD9F8',
            },
        ],

    },
];

const BlogSectionTwo = ({noTags}) => {
    return (
        <Grid className="blogSection">
            <Grid container className="container" spacing={4}>
                <Grid item xs={12}>
                    <SectionTitle
                        title="Visit Our Company Insite "
                        subtitle="WE ARE HERE"
                    />
                </Grid>
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
                                            <p className="mb-10"><strong>Oscar White
                                                | </strong>PUBLISHED {item.created_at}</p>
                                            <h4><Link to="/single-blog/1">{item.title}</Link></h4>
                                            {noTags ? '' :
                                                <ul className="tagLists">
                                                    {item.tag.map((tag, i) => {
                                                        return <li key={i}><Link to="/" style={{
                                                            background: tag.bg_color,
                                                            color: tag.text_color
                                                        }}>{tag.title}</Link></li>;
                                                    })}
                                                </ul>
                                            }
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

export default BlogSectionTwo;