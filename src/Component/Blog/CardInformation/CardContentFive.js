import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import relearnImg from '../../../Image/BlogImg/relearn.PNG'
import img from '../../../Image/marufJU.jpg'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        '&:hover': {
            vector: [0, 10, 30],
            display: 'block',
            padding: 8,
            boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
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
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function CardContentFive() {
    const classes = useStyles();
return (
    <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar src={img} aria-label="recipe" className={classes.avatar}>
                M
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="JavaScript Weekly Challenge — Relearn your JS Concept in a Week"
            subheader="May 03, 2020"
        />
        <CardMedia
            className={classes.media}
            image={relearnImg}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Consistency is the only word that helps anyone to touch the dream. No matter what if you discover yourself with some amazing things. First of all, you need to consistence enough.
                <Link href="https://medium.com/@mdmaruf43/javascript-weekly-challenge-relearn-your-js-concept-in-a-week-1c596917b049">Read more</Link>
            </Typography>
        </CardContent>
    </Card>
    );
}