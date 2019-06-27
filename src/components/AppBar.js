import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartOutline from '@material-ui/icons/ShoppingCartOutlined';
import Grid from '@material-ui/core/Grid';
import { SwipeableDrawer, List, ListItem, ListItemText, Divider} from '@material-ui/core';

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
    },
    list: {
        width: 250,
    }
}));

function MyAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === "Shift")) {
            return;
        }
        setState({ ...state, [side]: open });
    } 

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Home', 'My Profile', 'Explore', 'Saved Items'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['My Account', 'Logout'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Grid item xs={2}>
                        <IconButton edge="start" color="inherit" 
                            className={classes.menuButton} aria-label="Menu"
                            onClick={toggleDrawer('left', true)}
                        >
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
                    <SwipeableDrawer
                        open={state.left}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {sideList('left')}
                    </SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MyAppBar;