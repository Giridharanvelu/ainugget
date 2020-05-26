import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import FontAwesome from "../UiStyle/FontAwesome";

import logo from '../../images/logo.svg';

import './style.scss';

const sociallinks = [
    {
        id: 1,
        name: 'facebook',
    },
    {
        id: 2,
        name: 'linkedin',
    },
    {
        id: 3,
        name: 'dribbble',
    },
    {
        id: 4,
        name: 'twitter',
    },
];

const Footer = () => {
    const [activeSocial, setSocial] = useState(1);
    return (
        <Grid className="footerWrapper">
            <Grid container className="container" spacing={4}>
                <Grid item xs={12} md={2}>
                    <Grid className="footerContact">
                        <Link to="/home"><img src={logo} alt="logo"/></Link>
                        <p>On the other hand, we denounce with righteous indignation and dislike.</p>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} sm={6}>
                    <Grid className="widget twiceHold">
                        <h4 className="widgetTitle">Comapny</h4>
                        <ul className="quickLinks">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about-us">Goal</Link></li>
                            <li><Link to="/contact-us">Career</Link></li>
                            <li><Link to="/marketing">Case Study</Link></li>
                            <li><Link to="/marketing">Qtotes</Link></li>
                        </ul>
                    </Grid>
                    <Grid className="widget twiceHold haspl">
                        <h4 className="widgetTitle">About</h4>
                        <ul className="quickLinks">
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/faq">Faq</Link></li>
                            <li><Link to="/clients">Clients</Link></li>
                            <li><Link to="/contact-us">Docs</Link></li>
                            <li><Link to="/marketing">Status</Link></li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2} sm={6}>
                    <h4 className="widgetTitle">Support</h4>
                    <ul className="quickLinks">
                        <li><Link to="/home">Terms and Condition</Link></li>
                        <li><Link to="/home">Privacy Policy</Link></li>
                        <li><Link to="/home">Report Problem</Link></li>
                        <li><Link to="/home">Legal Information</Link></li>
                        <li><Link to="/home">API Refarnce</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <h4 className="widgetTitle">Contact Us</h4>
                    <p>8565 Manina Avenue •<br/>Brisbon Street NY 91335,<br/>United States</p>
                    <ul className="socialLinks">
                        {sociallinks.map(item => {
                            return <li key={item.id}><Link className={activeSocial === item.id ? 'active' : ''}
                                                           onMouseEnter={() => setSocial(item.id)}
                                                           to="/home"><FontAwesome name={item.name}/></Link></li>;
                        })}
                    </ul>
                </Grid>
            </Grid>
            <Grid className="container">
                <Grid className="footerBottom">
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <p>Copyright © 2019 All rights reserved.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Footer;