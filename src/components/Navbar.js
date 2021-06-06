import React from 'react';
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { fade, Grid, InputBase, Link, makeStyles } from '@material-ui/core';
import Logo from '../assets/hn_512.png'
import SearchIcon from '@material-ui/icons/Search';




function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles((theme) => (
    {
        typographyStyles: {
            display: 'inline-flex',

            flex: 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            }
        }
    }
));



const Navbar = () => {

    const classes = useStyles()

    const useStyle = {
        toolbar: {
            minHeight: '66.5px',
            backgroundColor: '#333333',

        }
    };


    return (
        <div>
            <HideOnScroll >
                <AppBar>
                    <Toolbar className="Toolbar" style={useStyle.toolbar}>

                        <Typography className={classes.typographyStyles}>
                            <Link to='/'><img alt="Nokia logo" src={Logo} className="n-logo" /></Link>
                        </Typography>
                        <Grid item >
                            <ul className="navbar-ul">
                                <button className="nav-btn"><li className="navbar-li">New-Posts</li></button>
                                <button className="nav-btn"><li className="navbar-li">Past-Posts</li></button>
                                <button className="nav-btn"><li className="navbar-li">Jobs</li></button>
                                <button className="nav-btn"><li className="navbar-li">Submit </li></button>

                            </ul>
                        </Grid>
                        <Grid item >
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Grid>
                        <Grid>
                            <Link to="login"><div className="navbar-li">Login</div></Link>
                        </Grid>

                    </Toolbar>

                </AppBar>

            </HideOnScroll>
            <Grid container item>
                <div style={{
                    minHeight: '66.5px',
                    backgroundColor: '#333333',
                }}></div>
            </Grid>

        </div>
    );

}


export default Navbar;
