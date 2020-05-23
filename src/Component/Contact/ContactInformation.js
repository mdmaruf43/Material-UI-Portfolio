import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

export default function ContactInformation() {
    const classes = useStyles();

return (
        <div className={classes.paper}>
            <Typography variant="h6" component="h6" gutterBottom>
                Get In Touch
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Enter Your Subject"
                    name="text"
                    autoComplete="text"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    name="text"
                    autoComplete="text"
                    autoFocus
                    placeholder="Enter Your Text"
                    multiline
                    rows={2}
                    rowsMax={4}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Send Mail
                </Button>
            </form>
        </div>
    );
}