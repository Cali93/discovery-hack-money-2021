import { makeStyles } from '@material-ui/core/styles';

export const footerStyles = makeStyles(theme => ({
  links: {
    marginTop: '1.5rem',
  },
  link: {
    marginTop: '1.5rem',
    margin: '0 .7rem',
    color: 'black',
    fontWeight: 'bold'
  },
  logo: {
    maxWidth: 150,
    maxHeight: 150,
    paddingTop: '15px',
  },
  copyright: {
    marginLeft: '-13.39rem',
    paddingBottom: '15px',
  },
}));
