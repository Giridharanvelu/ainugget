import React, {Fragment, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import SectionTitle from "../../components/SectionTitle";
import Hidden from "@material-ui/core/Hidden";

// image
import img1 from '../../images/case-study/csimg1.jpg';
import img2 from '../../images/case-study/csimg2.jpg';
import img3 from '../../images/case-study/csimg3.jpg';
import img4 from '../../images/case-study/csimg4.jpg';
import img5 from '../../images/case-study/csimg5.jpg';
import img6 from '../../images/case-study/csimg6.jpg';
import imgbig1 from '../../images/case-study/csbigimg1.jpg';
import imgbig2 from '../../images/case-study/csbigimg2.jpg';

import './style.scss';
import FontAwesome from "../../components/UiStyle/FontAwesome";
import RelatedCaseStudy from "../../components/RelatedCaseStudy";

const case_studies = [
    {
        id: 1,
        thumb: img1,
        cat: 'Finance',
        cat_bg: '#4640DD',
        author: 'Oscar White',
        title: 'Business Leadership in South Africa’s 1991',
        created_at: '2 DAYS AGO',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 2,
        thumb: img2,
        cat: 'Design',
        cat_bg: '#F05153',
        author: 'Claudia Mays',
        title: 'Business Leadership in South Africa’s 1993',
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

class SingleCaseStudy extends Component {

    state = {
        case_study: []
    };

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        const data = case_studies.filter(item => item.id === id);
        this.setState({
            case_study: data[0]
        });
    }

    render() {
        return (
            <Fragment>
                <BreadCrumb
                    title="case study"
                />
                <Grid className="singleCaseWrapper">
                    <SectionTitle
                        title={this.state.case_study.title}
                    />
                    <img src={imgbig1} alt="i"/>
                    <Grid className="container" container spacing={4}>
                        <Hidden smDown><Grid item xs={1}></Grid></Hidden>
                        <Grid item xs={12} md={10}>
                            <Grid className="casedMetaDetails">
                                <div className="scmd">
                                    <p>Client</p>
                                    <strong>XpeedStudio LLC</strong>
                                </div>
                                <div className="scmd">
                                    <p>Category</p>
                                    <ul className="catLists">
                                        <li><Link to="/">Finance</Link></li>
                                        <li><Link to="/">Business</Link></li>
                                        <li><Link to="/">Economy</Link></li>
                                    </ul>
                                </div>
                                <div className="scmd">
                                    <p>Published</p>
                                    <strong>October 7, 2019</strong>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="container" container spacing={4}>
                        <Grid item xs={12} md={1}>
                            <ul className="lsocialLinks">
                                <li><Link to="/"><FontAwesome name="facebook" /></Link></li>
                                <li><Link className="twt" to="/"><FontAwesome name="twitter" /></Link></li>
                                <li><Link className="lnk" to="/"><FontAwesome name="linkedin" /></Link></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid className="caseDetails">
                                <h4>About the Client</h4>
                                <p>We work systematically to integrate corporate responsibility in our core business and make the our expertise available benefit of the societies where we operate the system. A most successful website the obviously needs great design to be one of the top 10 IT companies in India, but the web design.</p>
                                <h4>The Working Challenge</h4>
                                <p>Web developers are happy to share their knowledge and expert tise about web development. They can advise you on the most important aspects you will need to consider knowledge and expert</p>
                                <ul>
                                    <li>Adding functionality to an innovative Business</li>
                                    <li>Managing a complex open source</li>
                                    <li>Taking over the project and handing it</li>
                                </ul>
                                <p>We work systematically to integrate corporate responsibility in our core business and make the our expertise available benefit of the societies where we operate the system. A most successful website the obviously needs great design to be one of the top 10 IT companies in India, but the web design.</p>
                                <img src={imgbig2} alt="imgbig2"/>
                                <h4>Find Solution and Solve it</h4>
                                <p>Web developers are happy to share their knowledge and expert tise about web development. They can advise you on the most important aspects you will need to consider knowledge and expert</p>
                                <ul>
                                    <li>Adding functionality to an innovative Business</li>
                                    <li>Managing a complex open source</li>
                                    <li>Taking over the project and handing it</li>
                                </ul>
                                <p>We work systematically to integrate corporate responsibility in our core business and make the our expertise available benefit of the societies where we operate the system. A most successful website the obviously needs great design to be one of the top 10 IT companies in India, but the web design.</p>
                                <p>Web developers are happy to share their knowledge and expert tise about web development. They can advise you on the most important aspects you will need to consider knowledge and expert</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="hrLine"></Grid>
                    <RelatedCaseStudy/>
                </Grid>
                <WorkInquiry/>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(SingleCaseStudy);