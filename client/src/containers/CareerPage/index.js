import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import SectionTitle from "../../components/SectionTitle";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

import './style.scss';

const careers = [
    {
        id: 1,
        title: 'Account Management Team Leader',
        address: 'New York, USA',
        job_type: 'Full Time',
        tags: [
            {
                title: 'Finance',
                text_color: '#4640DD',
                bg_color: '#DAD9F8'
            },
        ]
    },
    {
        id: 2,
        title: 'Senior Product Design Consultant',
        address: 'Texus, USA',
        job_type: 'Remote',
        tags: [
            {
                title: 'Design',
                text_color: '#FE7A25',
                bg_color: '#FFE4D3'
            },
        ]
    },
    {
        id: 3,
        title: 'Quality Assurance Specialist',
        address: 'Victoria, BC',
        job_type: 'Full Time',
        tags: [
            {
                title: 'Development',
                text_color: '#F05153',
                bg_color: '#FCDCDD'
            },
        ]
    },
    {
        id: 4,
        title: 'Employer Branding Specialist',
        address: 'Melbourne, AU',
        job_type: 'Part Time',
        tags: [
            {
                title: 'Marketing',
                text_color: '#FE7A25',
                bg_color: '#FFE4D3'
            },
        ]
    },
    {
        id: 5,
        title: 'Senior React Native Developer',
        address: 'Adelaide, AU',
        job_type: 'Remote',
        tags: [
            {
                title: 'Marketing',
                text_color: '#F05153',
                bg_color: '#FCDCDD'
            },
        ]
    },
    {
        id: 6,
        title: 'Senior Product Design Consultant',
        address: 'Texus, USA',
        job_type: 'Remote',
        tags: [
            {
                title: 'Design',
                text_color: '#FE7A25',
                bg_color: '#FFE4D3'
            },
        ]
    },
    {
        id: 7,
        title: 'Quality Assurance Specialist',
        address: 'Victoria, BC',
        job_type: 'Full Time',
        tags: [
            {
                title: 'Development',
                text_color: '#F05153',
                bg_color: '#FCDCDD'
            },
        ]
    },
    {
        id: 8,
        title: 'Employer Branding Specialist',
        address: 'Melbourne, AU',
        job_type: 'Part Time',
        tags: [
            {
                title: 'Marketing',
                text_color: '#FE7A25',
                bg_color: '#FFE4D3'
            },
        ]
    },
    {
        id: 9,
        title: 'Senior React Native Developer',
        address: 'Adelaide, AU',
        job_type: 'Remote',
        tags: [
            {
                title: 'Marketing',
                text_color: '#F05153',
                bg_color: '#FCDCDD'
            },
        ]
    },
];

const CareerPage = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="Career"
            />
            <Grid className="careerWrapper">
                <SectionTitle
                    subtitle="WORK AND BE YOURSELF"
                    title="Showing Current Offers and Jobs Available"
                />
                <Grid className="container" container spacing={4}>
                    {careers.map(item => {
                        return (
                            <Grid key={item.id} item xs={12} md={4} sm={6}>
                                <Grid className="careerPost">
                                    <ul className="tagLists">
                                        {item.tags.map((tag, i) => {
                                            return <li key={i}><Link to="/" style={{
                                                background: tag.bg_color,
                                                color: tag.text_color
                                            }}>{tag.title}</Link></li>;
                                        })}
                                    </ul>
                                    <h2>{item.title}</h2>
                                    <p>{item.address}.{item.job_type}</p>
                                    <Button className="cBtn cBtnOutline">APPLY NOW</Button>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <div className="viewAll pt-50">
                    <Button className="cBtn"><Link to="/">View All Jobs</Link></Button>
                </div>
            </Grid>
            <OurAchievementsTwo/>
            <WorkInquiry/>
            <Footer/>
        </Fragment>
    )
};
export default CareerPage;