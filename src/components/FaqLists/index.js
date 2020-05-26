import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import ExpansionPanelCard from "../ExpansionPanelCard";

import './style.scss';

const faq1 = [
    {
        id: 1,
        title: 'How to change partner gray image to color?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 2,
        title: 'Where I add my email address in caldera form ?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 3,
        title: 'Page showing 404 but this page still there?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 4,
        title: 'How to increase upload_max_filesize?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
];

const faq2 = [
    {
        id: 5,
        title: 'How to change partner gray image to color?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 6,
        title: 'Where I add my email address in caldera form ?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 7,
        title: 'Page showing 404 but this page still there?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
];

const FaqLists = () => {

    return (
        <Grid className="faqLists">
            <SectionTitle
                subtitle="KNOWLEDGE BASE"
                title="Search our articles or browse by category below"
            />
            <Grid className="container" container spacing={4}>
                <Grid item xs={12} md={6}>
                    <ExpansionPanelCard faqlists={faq1}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ExpansionPanelCard faqlists={faq2}/>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default FaqLists;