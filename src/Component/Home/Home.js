import React from 'react'
import Typography from '@material-ui/core/Typography';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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

function Home() {
    return (
        <React.Fragment >
            <Typography variant="h5" component="h2" gutterBottom>
                Hello, Welcome Maruf's World.
            </Typography>
            <Typography variant="body2" component="h2" gutterBottom>
                I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            </Typography>
            <MyButton color="blue">Download Resume</MyButton>
        </React.Fragment>
    )
}

export default Home
