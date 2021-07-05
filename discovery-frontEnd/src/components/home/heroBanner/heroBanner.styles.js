

import { makeStyles } from '@material-ui/core/styles';
import discovery from './discovery-home-page.png';
export const bannerStyles = makeStyles(theme => ({
  heroImage: {
    backgroundImage: `url(${discovery})`,
    backgroundColor: '#CCFCFF',
    height: '900px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'relative',
  },
  container: {
    // position: 'fixed',
    backgroundImage: `url(./discovery-home-page.png)`
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
    maxWidth: '100%',
    maxHeight: '100%',
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
