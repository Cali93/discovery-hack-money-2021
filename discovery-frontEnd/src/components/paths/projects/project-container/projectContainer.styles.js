import { makeStyles } from '@material-ui/core/styles';

export const projectContainerStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        backgroundColor: theme.palette.secondary.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(9)
        }
    },
    gridContainer: {
        paddingTop: '30px', paddingLeft: '20px', paddingBottom: '20px'
    }
}));
