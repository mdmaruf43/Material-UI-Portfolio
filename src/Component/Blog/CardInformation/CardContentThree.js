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
import inbuiltFunctionImg from '../../../Image/BlogImg/inbuiltFunction.PNG'
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

export default function CardContentThree() {
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
            title="Javascript most useful inbuilt function that essential for every JS learner"
            subheader="Apr 27, 2020"
        />
        <CardMedia
            className={classes.media}
            image={inbuiltFunctionImg}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Undoubtly world one of the best programming languages is JavaScript in 2020. 
                More specifically, If you are interested in web technology you have to grasp JavaScript first.
                <Link href="https://medium.com/@mdmaruf43/javascript-most-useful-inbuilt-function-that-essential-for-every-js-learner-4a42fadd76bc">Read more</Link>
            </Typography>
        </CardContent>
    </Card>
    );
}