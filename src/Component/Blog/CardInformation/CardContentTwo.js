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
import reactBeginerImg from '../../../Image/BlogImg/reactbeginer.PNG'
import img from '../../../Image/marufJU.jpg'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        '&:hover': {
            vector: [0, 10, 30],
            display: 'block',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            transition: 'boxShadow 0.3s',
            willChange: 'transform',
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

export default function CardContentTwo() {
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
            title="React Basics — Component, JSX, Props, State, and more in detail"
            subheader="May 05, 2020"
        />
        <CardMedia
            className={classes.media}
            image={reactBeginerImg}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Admittedly, React is top of the front-end industry in 2020. It’s a very friendly library for beginners Lerner. 
                So, let's try to understand some important basics with me.
                <Link href="https://medium.com/swlh/react-basics-component-jsx-props-state-and-more-in-detail-dac22d53bc8d">Read more</Link>
            </Typography>
        </CardContent>
    </Card>
    );
}