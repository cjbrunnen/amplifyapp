import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0, 2px',
        transform: 'scale(0.8)'
    },
    title : {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12
    },
}));

export default function CardTemplate () {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Category Card
                </Typography>
                <Typography variant="h5" component="h2">
                    Su
                    {bull}
                    per
                    {bull}
                    sede
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Verb
                </Typography>
                <Typography variant="body2" component="p">
                    To take the place of (a person or thing previously in authority or use)
                    <br/>
                    {"the older models of car have now been superseded"}
                </Typography>

                <CardActions>
                    <Button size="small">
                        Learn More
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}