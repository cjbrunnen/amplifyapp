import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartOutline from '@material-ui/icons/ShoppingCartOutlined';
import Grid from '@material-ui/core/Grid';
import '../App.css';
// import { spacing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        background: '#222',
        height: 100,
        color: '#F50057'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Monoton'
    },
    logo: {
        fontFamily: 'Monoton',
        color: '#F50057'
    }
}));

function MyAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Grid item xs={2}>
                        <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h4" className={classes.logo}>
                            PrintZu
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton edge="end" color="inherit" aria-label="Cart">
                            <CartOutline />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MyAppBar;