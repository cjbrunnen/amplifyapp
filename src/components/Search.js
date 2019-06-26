import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    toolbar: {
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

function Search() {
    const classes = useStyles();
    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <Grid item xs={10}>
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={2}>
                    <SearchIcon />
                </Grid>
            </Toolbar>

        </div>
    )
}

export default Search;