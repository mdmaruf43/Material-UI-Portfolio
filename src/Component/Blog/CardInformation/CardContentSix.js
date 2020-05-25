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
import stackImg from '../../../Image/BlogImg/stack.PNG'
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
            transition: 'boxShadow 0.3s',
            willChange: 'transform',
            border: '5px solid white',
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

export default function CardContentSix() {
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
            title="JavaScript Data Structure — Stack, Queue in detail"
            subheader="May 08, 2020"
        />
        <CardMedia
            className={classes.media}
            image={stackImg}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Meanwhile, JavaScript achieves a leading position in web technology. So, it is the best time to learn JavaScript and its stuff.
                <Link href="https://medium.com/analytics-vidhya/javascript-data-structure-stack-queue-in-detail-eba7c3762fdc">Read more</Link>
            </Typography>
        </CardContent>
    </Card>
    );
}