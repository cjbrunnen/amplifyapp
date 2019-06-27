import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import image from '../../build/static/media/3dimage.jpg';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Mickey Mouse Trap"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mickey Mouse trap
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        mickey mousetrapp with Rainbow
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Save
                </Button>
                <Button size="small" color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}