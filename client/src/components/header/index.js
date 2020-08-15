import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import {NavLink, withRouter} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import MobileMenu from "../MobileMenu";
import Hidden from "@material-ui/core/Hidden";
import Logo from "../Logo";

import logo from "../../images/ai-logo.png";


import './style.scss';
import Button from "@material-ui/core/Button";

const Header = (props) => {

    const [showMobile, setShowMobile] = useState(false);

    return (
        <Grid className="header">
            <Grid
                container
                alignItems="center">
                <Grid item xs={6} lg={2}>
                    <Logo
                        logo={logo}
                        alt="Logo"
                        link="/home"
                    />
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={12} md={7}>
                        <Grid className="mainMenu">
                            <List>
                                <ListItem><NavLink to="/home" exact activeClassName="active">Home</NavLink></ListItem>
                                <ListItem className="hasSubMenu">
                                    <span>Page</span>
                                    <List>
                                        <ListItem><NavLink to="/home2">Home Two</NavLink></ListItem>
                                        <ListItem><NavLink to="/home3">Home Thre</NavLink></ListItem>
                                        <ListItem><NavLink to="/goal">Goal</NavLink></ListItem>
                                        <ListItem><NavLink to="/quotes">Quotes</NavLink></ListItem>
                                        <ListItem><NavLink to="/single-blog/1">Single Blog</NavLink></ListItem>
                                        <ListItem><NavLink to="/single-case-study/1">Single Case
                                            Study</NavLink></ListItem>
                                    </List>
                                </ListItem>
                                <ListItem><NavLink to="/career">Career</NavLink></ListItem>
                                <ListItem><NavLink to="/case-study">Case Study</NavLink></ListItem>
                                <ListItem><NavLink to="/blog">Blog</NavLink></ListItem>
                                <ListItem><NavLink to="/about-us">About</NavLink></ListItem>
                                <ListItem><NavLink to="/faq">FAQ</NavLink></ListItem>
                                <ListItem><NavLink to="/contact-us">contact us</NavLink></ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={3} lg={3} sm={4} container alignItems="center"
                          className="justify-md-flex-space-between" justify="flex-end">
                        <Button className="cBtn cBtnUppercase ml-10">Contact Us</Button>
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid item xs={6} sm={2} className="text-right">
                        <Grid className={`humbergur ${showMobile ? 'show' : ''}`}
                              onClick={() => setShowMobile(!showMobile)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <MobileMenu showMobile={showMobile} setShowMobile={setShowMobile}/>
        </Grid>
    )
};

export default withRouter(Header);