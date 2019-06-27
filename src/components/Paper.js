import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        height: 200,
        flex: 1,
    }
}));

export default function PaperSquare() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5">
                    Carousel to go here
                </Typography>
                <Typography component="p">
                    Featured Products
                    <br/>
                    Horizontal, Auto scroll (3000)
                    <br/>
                    Flex, overflow-x hidden
                </Typography>
            </Paper>
        </div>
    )
}