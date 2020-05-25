import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: (props) =>
        props.color === 'red'
            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: (props) =>
        props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 8,
});

const useStyles = makeStyles((theme) => ({
    textDecoration: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <React.Fragment >
            <Typography className={classes.textShadow} variant="h2" component="h2" gutterBottom>
                Welcome Maruf's World
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            </Typography>
            <Link className={classes.textDecoration} href="../../File/MarufResume.pdf" target="_blank" download>
                <MyButton color="blue">Download Resume</MyButton>
            </Link>
        </React.Fragment>
    )
}

export default Home
