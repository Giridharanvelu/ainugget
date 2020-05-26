import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import FontAwesome from "../UiStyle/FontAwesome";

import './style.scss';
import rcthum1 from "../../images/sidebar/rcpostimg1.jpg";
import rcthum2 from "../../images/sidebar/rcpostimg2.jpg";
import rcthum3 from "../../images/sidebar/rcpostimg3.jpg";
import thumb1 from "../../images/blog/blog-post4.jpg";
import thumb2 from "../../images/blog/blog-post5.jpg";
import thumb3 from "../../images/blog/blog-post6.jpg";

const rcpost = [
    {
        id: 1,
        thumb: rcthum1,
        title: 'Li lingues differe solmen in li grammatica',
    },
    {
        id: 2,
        thumb: rcthum2,
        title: 'One morning, when Gregor Samsa',
    },
    {
        id: 3,
        thumb: rcthum3,
        title: 'Extra benefit through Invest by your money',
    },
];

const categories = [
    {
        id: 1,
        title: 'Business'
    },
    {
        id: 2,
        title: 'Case study'
    },
    {
        id: 3,
        title: 'Finance'
    },
    {
        id: 4,
        title: 'News'
    },
    {
        id: 5,
        title: 'Technology'
    },
    {
        id: 6,
        title: 'Services'
    },
];

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
    {
        id: 4,
        thumb: thumb2,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'A wonderful serenity has taken possession',
        body: 'A wonderful serenity has taken possessioing which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spn of my entire soul, like these sweet mornings of sprot, which was created for the',
    },
    {
        id: 5,
        thumb: thumb3,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'The languages only differ in their grammar',
        body: 'A wonderful serenity has taken possession of my. I am alone, and feel the charm of existence in this spot, which was  entire soul, like these sweet mornings of spring which I enjoy with my whole heartcreated for the',
    },
    {
        id: 6,
        thumb: thumb1,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'Benefit through Invest by yo',
        body: 'my entire soul, like these sweet mornings of spring which I enjoy with my wholA wonderful serenity has taken possession of e heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
    {
        id: 7,
        thumb: thumb1,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'A wonderful serenity has taken possession',
        body: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
    {
        id: 8,
        thumb: thumb2,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'The languages only differ in their grammar',
        body: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
    {
        id: 9,
        thumb: thumb3,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'Benefit through Invest by your money',
        body: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
    {
        id: 10,
        thumb: thumb2,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'A wonderful serenity has taken possession',
        body: 'A wonderful serenity has taken possessioing which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spn of my entire soul, like these sweet mornings of sprot, which was created for the',
    },
    {
        id: 11,
        thumb: thumb3,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'The languages only differ in their grammar',
        body: 'A wonderful serenity has taken possession of my. I am alone, and feel the charm of existence in this spot, which was  entire soul, like these sweet mornings of spring which I enjoy with my whole heartcreated for the',
    },
    {
        id: 12,
        thumb: thumb1,
        created_at: 'September 4, 2019',
        author: 'By Oscar White',
        title: 'Benefit through Invest by yo',
        body: 'my entire soul, like these sweet mornings of spring which I enjoy with my wholA wonderful serenity has taken possession of e heart. I am alone, and feel the charm of existence in this spot, which was created for the',
    },
];

const Sidebar = () => {

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    function changeHandler(e) {
        setSearch(e.target.value);
    }

    function searchHandler() {
        const results = blog.filter(item => item.title.toLowerCase().trim().includes(search));
        if (search !== '') {
            setSearchResults(results);
        }
    }

    return (
        <Grid className="sidebar">
            {/*widget search*/}
            <Grid className="widget widgetSearch">
                <form>
                    <FontAwesome name="search"/>
                    <input type="text" value={search} onKeyUp={() => searchHandler()} onChange={(e) => changeHandler(e)}
                           placeholder="Search"/>
                </form>
                <ul className="searchResults">
                    {search !== '' ? searchResults.map(item => {
                        return <li key={item.id}><Link to={`/single-blog/${item.id}}`}> <img src={item.thumb} alt="thumb"/> {item.title}</Link>
                        </li>;
                    }) : ''}
                </ul>
            </Grid>
            {/*widget recent post*/}
            <Grid className="widget widgetRecentPost">
                <Grid className="rcPostLists">
                    {rcpost.map(item => {
                        return (
                            <Grid key={item.id} className="rcSPost">
                                <Grid className="thumb">
                                    <img src={item.thumb} alt="rc post thumb"/>
                                </Grid>
                                <Grid className="content">
                                    <h2><Link to={`/single-blog/${item.id}`}>{item.title}</Link></h2>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            {/*widget widget-category*/}
            <Grid className="widget widgetCategory">
                <h4 className="widgetTitle">Categories</h4>
                <ul className="list">
                    {categories.map(item => {
                        return (
                            <li key={item.id}><Link to="/">{item.title}</Link></li>
                        )
                    })}
                </ul>
            </Grid>
        </Grid>
    )
};

export default Sidebar;