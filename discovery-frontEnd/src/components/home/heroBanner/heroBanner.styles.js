import { fade, makeStyles } from '@material-ui/core/styles';

export const bannerStyles = makeStyles(theme => ({
  container: {
    // position: 'fixed',
  },
  content: {
    backgroundColor: '#010d21',
    maxHeight: '926px',
    minHeight: '750px',
    padding: 0,
    margin: 0,
    left: 0,
    width: '100%',
  },
  flexContainer: {
    display: 'flex',
  },
  flexChild: {
    color: 'white',
    flex: 1,
    maxHeight: '926px',
    minHeight: '750px',
  },
  imageBanner: {
    display: 'block',
    width: '100%',
    paddingTop: '100px',
  },
  title: {
    fontSize: '72px',
    lineHeight: '76px',
    fontWeight: 800,
    paddingTop: '170px',
    textAlign: 'initial',
    paddingLeft: '12px',
  },
  description: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
    textAlign: 'initial',
    paddingLeft: '12px',
  },
  btn: {
    float: 'left',
    marginLeft: '12px',
  },
}));
