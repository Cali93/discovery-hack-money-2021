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
    maxWidth: 250,
    maxHeight: 250,
    borderRadius: '50%',

  },
  icons: {
    maxWidth: 50,
    maxHeight: 50,
    paddingRight: '20px',
  },
  activity: {
    maxWidth: '100%',
    maxHeight: '90%',
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
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // background:' rgba(29, 106, 154, 0.72)',
    color: '#fff',

    opacity: 0,

    /* transition effect. not necessary */
    // transition: opacity .2s, visibility .2s;
  },
  // activity: hover, imgDescription: {
  //   visibility: 'visible',
  //   opacity: 1,
  // },
}));

