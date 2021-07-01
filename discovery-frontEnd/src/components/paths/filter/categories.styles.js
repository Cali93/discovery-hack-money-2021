import { fade, makeStyles } from '@material-ui/core/styles';

export const categoriesStyles = makeStyles(theme => ({
    search: {
        borderRadius: '5px',
        border: '2px solid #d8d3d3',
        width: '50%',
        fontSize: '1rem',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid black',
        }
    },
}));
