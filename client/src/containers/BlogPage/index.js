import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

import './style.scss';

import thumb1 from '../../images/blog/blog-post4.jpg';
import thumb2 from '../../images/blog/blog-post5.jpg';
import thumb3 from '../../images/blog/blog-post6.jpg';
import Sidebar from "../../components/Sidebar";

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

class BlogPage extends React.Component {
    state = {
        row: blog,
        currentPage: 1,
        rowsPerPage: 3,
    };

    paginateHandler = prop => event => {
        this.setState({
            currentPage: Number(event.target.id),
        });
    };

    prevHandler = (pageNumbers) => {
        if (this.state.currentPage >= 2) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    nextHandler = (pageNumbers) => {
        if (this.state.currentPage < pageNumbers.length) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };

    render() {
        const {
            row,
            currentPage,
            rowsPerPage,
        } = this.state;


        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = row.slice(indexOfFirstRow, indexOfLastRow);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(row.length / rowsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => (
            <li
                key={number}
                id={number}
                className={currentPage === number ? 'active' : ''}
                onClick={this.paginateHandler(number)}
            >
                {number}
            </li>
        ));


        return (
            <Fragment>
                <BreadCrumb
                    title="blog"
                />
                <Grid className="blogPage">
                    <Grid className="container" container spacing={4}>
                        <Grid item xs={12} sm={8}>
                            <Grid className="blogPostLists">
                                {currentRows.map(item => {
                                    return (
                                        <Grid key={item.id} className="singleBlog">
                                            <Grid className="thumb">
                                                <img src={item.thumb} alt=""/>
                                            </Grid>
                                            <Grid className="content">
                                                <div className="btlMeta">
                                                    {item.created_at}
                                                    <strong> | {item.author}</strong>
                                                </div>
                                                <h2><Link to={`/single-blog/${item.id}`}>{item.title}</Link></h2>
                                                <p>{item.body}</p>
                                                <Button className="cBtn cBtnUppercase px-0"><Link
                                                    className="pl-20 pr-20" to={`/single-blog/${item.id}`}>Continue
                                                    Reading</Link></Button>
                                            </Grid>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Grid className="paginationWrapper">
                                <ul>
                                    <li onClick={() => this.prevHandler(pageNumbers)}><FontAwesome name="angle-left"/>
                                    </li>
                                    {renderPageNumbers}
                                    <li onClick={() => this.nextHandler(pageNumbers)}><FontAwesome name="angle-right"/>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Sidebar/>
                        </Grid>
                    </Grid>
                </Grid>
                <OurAchievementsTwo/>
                <WorkInquiry/>
                <Footer/>
            </Fragment>
        );
    }
}

export default BlogPage;