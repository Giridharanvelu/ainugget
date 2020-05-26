import React, {Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FontAwesome from "../UiStyle/FontAwesome";

import Logo from '../../images/logo.svg';

import './style.scss';

const menulists = [
    {
        id: 1,
        name: 'Home',
        link: '/home'
    },
    {
        id: 2,
        name: 'page',
        submenu: [
            {
                id: 21,
                name: 'Home Two',
                link: '/home2'
            },
            {
                id: 22,
                name: 'Home Three',
                link: '/home3'
            },
            {
                id: 23,
                name: 'goal',
                link: '/goal'
            },
            {
                id: 24,
                name: 'quotes',
                link: '/quotes'
            },
            {
                id: 25,
                name: 'single blog',
                link: '/single-blog/1'
            },
            {
                id: 26,
                name: 'single case study',
                link: '/single-case-study/1'
            },
        ]
    },
    {
        id: 3,
        name: 'career',
        link: '/career'
    },
    {
        id: 4,
        name: 'case study',
        link: '/case-study'
    },
    {
        id: 5,
        name: 'blog',
        link: '/blog'
    },
    {
        id: 6,
        name: 'about us',
        link: '/about-us'
    },
    {
        id: 7,
        name: 'faq',
        link: '/faq'
    },
    {
        id: 8,
        name: 'contact-us',
        link: '/contact-us'
    },
];

const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


const MobileMenu = ({showMobile, setShowMobile}) => {
    const classes = useStyles();

    const [menuId, setActiveMid] = useState();

    function handleExpandClick(id) {
        setActiveMid(id);
        if (menuId === id) {
            setActiveMid()
        }
    }

    return (
        <Fragment>
            <Grid className={`mobileMenu ${showMobile ? '' : 'hidden'}`}>
                <Grid className="sLogo">
                    <Link to="/"><img src={Logo} alt="logo"/></Link>
                </Grid>
                <List>
                    {menulists.map(item => {
                        return (
                            <ListItem key={item.id}>
                                {!item.submenu
                                    ? <Link to={item.link}>{item.name}</Link>
                                    : <Grid
                                        className="mItem"
                                        onClick={() => handleExpandClick(item.id)}
                                    >
                                        <span>{item.name}</span>
                                        <Grid
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: menuId === item.id,
                                            })}
                                        >
                                            <FontAwesome name="angle-down"/>
                                        </Grid>
                                    </Grid>
                                }
                                {item.submenu ? item.submenu.map(subitem => {
                                    return (
                                        <Collapse key={subitem.id} className="subMenu" in={menuId === item.id}
                                                  timeout="auto" unmountOnExit>
                                            <Link to={subitem.link}>{subitem.name}</Link>
                                        </Collapse>
                                    )
                                }) : ''}
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Grid onClick={() => setShowMobile(!showMobile)}
                  className={`menuHoverlay ${showMobile ? 'show' : ''}`}></Grid>
        </Fragment>
    )
};

export default MobileMenu;