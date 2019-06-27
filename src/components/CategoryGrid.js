import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 100,
        padding: theme.spacing(2),
    }
})); 



export default function CategoryGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        Category 1
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        Category 2
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        Category 3
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        Category 4
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}