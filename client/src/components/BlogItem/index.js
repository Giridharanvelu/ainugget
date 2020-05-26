import React from 'react';
import Grid from "@material-ui/core/Grid";
import FontAwesome from "../UiStyle/FontAwesome";
import {Link} from "react-router-dom";

import './style.scss';

const BlogItem = ({item}) => {
    return(
        <Grid className="blogItem">
            <div className="thumb">
                <img src={item.image} alt="blog thumb"/>
            </div>
            <Grid className="content">
                <Grid className="metatop">
                    <span className="date"><FontAwesome name="calendar"/>  {item.created_at} </span>
                </Grid>
                <h2><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                <p>{item.body}</p>
                <Link to="/" className="cBtn cBtnRadius">Read More</Link>
            </Grid>
        </Grid>
    )
};

export default BlogItem;