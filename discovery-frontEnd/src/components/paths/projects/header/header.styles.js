import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainGrid: {
    backgroundColor: '#2e3042', paddingTop: '15px',
    maxWidth: '100%',
    color: 'white'
  },
  logo: {
    maxWidth: 220,
    maxHeight: 220,
    borderRadius: '50%',

  },
  icons: {
    maxWidth: 50,
    maxHeight: 50,
    paddingRight: '20px',
  },
  activity: {
    height: '120px',
    paddingRight: '2px',
    position: 'relative',
    '&:hover': {
      imgDescription: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
  imgDescription: {
    marginTop: '-7px',
    marginRight: '50px',
    fontSize: '0.9rem',
  },
}));

