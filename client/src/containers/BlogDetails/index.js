import React, {Fragment, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import Hidden from "@material-ui/core/Hidden";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import CommentForm from "../../components/CommentForm";
import SimilarBlogs from "../../components/SimilarBlogs";

import thumb1 from "../../images/blog/blog-post4.jpg";
import thumb2 from "../../images/blog/blog-post5.jpg";
import thumb3 from "../../images/blog/blog-post6.jpg";
import thumb4 from "../../images/blog/blog-post7.jpg";
import thumb5 from "../../images/blog/blog-post8.jpg";
import thumb6 from "../../images/blog/blog-post9.jpg";

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

class BlogDetails extends Component {

    state = {
        blogposts: [],
        id: this.props.match.params.id
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const id = parseInt(this.props.match.params.id);
            const data = blog.filter(item => item.id === id);
            this.setState({
                blogposts: data[0]
            });
            window.scrollTo({
                top: 320,
                behavior: 'smooth',
            })
        }
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        const data = blog.filter(item => item.id === id);
        this.setState({
            blogposts: data[0]
        });
    }

    render() {

        const {blogposts} = this.state;
        return (
            <Fragment>
                <BreadCrumb
                    title="Blog"
                />
                <Grid className="singleBlogWrapper">
                    <Grid className="container" container spacing={4}>
                        <img src={blogposts.thumb} alt="i"/>
                        <Hidden smDown><Grid item xs={1}></Grid></Hidden>
                        <Grid item xs={12} md={10}>
                            <Grid className="casedMetaDetails">
                                <div className="scmd">
                                    <p>Author</p>
                                    <strong>{blogposts.author}</strong>
                                </div>
                                <div className="scmd">
                                    <p>Published</p>
                                    <strong>{blogposts.created_at}</strong>
                                </div>
                                <div className="scmd">
                                    <p>Comments</p>
                                    <strong>4 Comments</strong>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="container" container spacing={4}>
                        <Hidden smDown><Grid item xs={2}></Grid></Hidden>
                        <Grid item xs={12} md={8}>
                            <Grid className="blogDetails">
                                <h2>{blogposts.title}</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                                    mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                                    of existence in this spot, which was created for the bliss of souls like mine. I am
                                    so happy</p>
                                <img src={thumb4} alt="thumb4"/>
                                <p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the
                                    exquisite sense of mere tranquil existence, that I neglect my talents. I should be
                                    incapable of drawing a single stroke at the present moment; and yet I feel that I
                                    never was a greater artist than now. When, while the lovely valley teems with vapour
                                    around me, and the meridian sun strikes the upper surface of the impenetrable
                                    foliage of my trees, and but a few stray gleams steal into</p>
                                <img src={thumb5} alt="thumb5"/>
                                <p>The inner sanctuary, I throw myself down among the tall grass by the trickling
                                    stream; and, as I lie close to the earth, a thousand unknown plants are noticed by
                                    me: when I hear the buzz of the little world among the stalks, and grow familiar
                                    with the countless indescribable forms of the insects and flies, then I feel the
                                    presence of the Almighty, who formed us in his own image, and the breath</p>
                                <img src={thumb6} alt="thumb6"/>
                                <blockquote>
                                    <p>“ A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the
                                        charm ”</p>
                                </blockquote>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet
                                    mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                                    of existence in this spot, which was created For the bliss of souls like mine. I am
                                    so happy, my dear friend, so absorbed in</p>
                                <ul>
                                    <li>A wonderful serenity has taken possession</li>
                                    <li>Of my entire soul, like these sweet mornings of spring which</li>
                                    <li>I enjoy with my whole heart.</li>
                                    <li>I am alone, and feel the charm of existence</li>
                                    <li>This spot, which was created For the bliss of souls like mine</li>
                                    <li>I am so happy, my dear friend, so absorbed in</li>
                                </ul>
                                <ul className="lsocialLinks">
                                    <li><Link to="/"><FontAwesome name="facebook"/></Link></li>
                                    <li><Link className="twt" to="/"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link className="lnk" to="/"><FontAwesome name="linkedin"/></Link></li>
                                </ul>
                                <CommentForm/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="hrLine"></Grid>
                </Grid>
                <SimilarBlogs/>
                <WorkInquiry/>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(BlogDetails);