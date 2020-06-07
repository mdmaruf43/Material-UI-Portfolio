import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { secondaryListItems } from '../Dashboard/ListItems';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import img from '../../Image/maruf.jpg'
import VisibilityButton from './VisibilityButton';
import GithubButton from './GithubButton'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import redOnionImg from '../../Image/redOnion.PNG'
import emaJonSimpleImg from '../../Image/emaSimple.PNG'
import doctorPortalImg from '../../Image/doctorPortal.PNG'
import friendMediaImg from '../../Image/FriendsMedia.PNG'
import aircnc from '../../Image/aircnc.PNG'
import powerxgym from '../../Image/powerXgym.PNG'
import SimpleButton from './Button'

function Copyright() {
    return (
        <Typography variant="body3" color="textSecondary" align="center">
        {'©'}
        <Link color="inherit" href="/"> </Link>{' '}
        {new Date().getFullYear()}
        {''}
        </Typography>
    );
    }

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        backgroundColor: '#fff',
        color: '#000'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#f0f0f0'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: '100vh',
    },
    large: {
        width: 50,
        hidth: 20,
    },
    textAlign: {
        textAlign: 'center',
    },
    img: {
        width: 475,
        height: 630,
    },
    alignText: {
        textAlign: 'center',
    },
    textDecoration: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    cardShadow: {
        '&:hover': {
            vector: [0, 10, 30],
            display: 'block',
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        }
    }

}));

export default function Portfolio() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const styles = {
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        card: {
            position: 'relative',
        },
        overlay: {
            position: 'absolute',
            top: 8,
            left: '50%',
            color: '#fff',
            transform: 'translateX(-50%)',
        },
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Maruf's World
                    </Typography>
                    <IconButton color="inherit">
                        <Link href="https://github.com/mdmaruf43" target="_blank">
                            <GitHubIcon />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://www.linkedin.com/in/mdmaruf43/" target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://twitter.com/mdmaruf43" target="_blank">
                            <TwitterIcon />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://www.youtube.com/channel/UCr3rzkFsTtgKg4fHSlo-hkg" target="_blank">
                            <YouTubeIcon />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://www.facebook.com/mdmaruf43" target="_blank">
                            <FacebookIcon />
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider/>
                    <Avatar alt="Remy Sharp" src={img} className={classes.large} />
                <Divider />
                    <List>{secondaryListItems}</List>
                <Divider />
                <Box className={classes.textAlign} pt={40}>
                    <Copyright />
                </Box>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Typography style={{textAlign: 'center'}} component="h2" variant="h3">
                        <Box pb={5}>
                            My Latest Project
                        </Box>
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={aircnc} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Air CNC
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <strong>Key Technology: </strong> React, React Router, React Bootstrap, SCSS, Firebase Hosting, React Maps, PayPal Payment, Express & MongoDB
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://air-cnc-ed30c.web.app/" target="_blank">
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/mdmaruf43/air-cnc" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>  
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={powerxgym} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Power X Gym
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <strong>Key Technology: </strong> React, React Router, React Bootstrap, Firebase Hosting, Google Analytics, SCSS, PayPal Payment, Express & MongoDB
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://power-x-gym-af156.web.app/" target="_blank">
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/mdmaruf43/Power-X-Gym" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={doctorPortalImg} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Doctors Portal
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <strong>Key Technology: </strong> React, React Router, Material UI, React Modal, Form Validation, Firebase Authentication, Express & MongoDB
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://doctors-portal-733e5.web.app/" target="_blank">
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/mdmaruf43/doctors-portal" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box pt={3}>

                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={redOnionImg} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Red Onion
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <strong>Key Technology: </strong> React, React Router, Firebase Authentication, Firebase Hosting, Stripe Payment, Express & MongoDB
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://red-onion-simple-restaurant.web.app/" target="_blank">
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/mdmaruf43/red-onion" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={emaJonSimpleImg} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Ema John Simple
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <strong>Key Technology: </strong> React, React Router, Firebase Authentication, Firebase Hosting, Stripe Payment, Express & MongoDB
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="hhttps://ema-john-simple-react.firebaseapp.com/" target="_blank">
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/mdmaruf43/ema-john-simple" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={friendMediaImg} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Friends Media
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <strong>Key Technology: </strong> React, React Router, React Hooks, 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://friends-media.netlify.com/" target="_blank">
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/mdmaruf43/react-assignment" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Typography className={classes.alignText}>
                        <Box pt={3}>
                            <Link className={classes.textDecoration} href="https://github.com/mdmaruf43" target="_blank">
                                <SimpleButton />
                            </Link>
                        </Box>
                    </Typography>
                </Container>
            </main>
        </div>
    );
}
