import React from 'react';
import Grid from "@material-ui/core/Grid";

import icon1 from '../../images/icon/phone.png';
import icon2 from '../../images/icon/world.png';
import icon3 from '../../images/icon/route.png';

import './style.scss';
import SectionTitle from "../SectionTitle";

const contactinfo = [
    {
        id: 1,
        icon: icon3,
        bg_color: '#DAD9F8',
        title: 'Office Location',
        list: [
            {
                body: '224 W 20th St,'
            },
            {
                body: 'New York NY 10011, USA'
            },
        ]
    },
    {
        id: 2,
        icon: icon1,
        bg_color: '#FFE4D3',
        title: 'Contact Number',
        list: [
            {
                body: '+1 817-483-4866'
            },
            {
                body: '+1 918-339-1085'
            },
        ]
    },
    {
        id: 3,
        icon: icon2,
        bg_color: '#FCDCDD',
        title: 'Email address',
        list: [
            {
                body: 'www.website.com'
            },
            {
                body: 'info@website.com'
            },
        ]
    },
];

const ContactInfoList = () => {
    return(
        <Grid className="contactInfoList">
            <SectionTitle
                subtitle="GET IN TOUCH"
                title="From banking and insurance to wealth management and securities"
            />
            <Grid container className="container" spacing={4}>
                {contactinfo.map(item => {
                    return(
                        <Grid key={item.id} item xs={12} md={4} sm={6}>
                            <Grid className="cntItem">
                                <Grid className="iconBox" style={{backgroundColor: item.bg_color}}>
                                    <img className="icon" src={item.icon} alt="icon bg"/>
                                </Grid>
                                <h2>{item.title}</h2>
                                <ul>{item.list.map((item, i) => {
                                    return<li key={i}>{item.body}</li>
                                })}</ul>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
};

export default ContactInfoList;