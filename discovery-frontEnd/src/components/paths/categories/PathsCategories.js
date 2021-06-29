import React, { Component } from 'react';
import personImg from './../../../img/person.jpg';
import styles from './PathsCategories.module.css';

export default class PathsCategories extends Component {
  render() {
    return (
      <div className={styles.getStarted}>
        <h1>Paths Categories</h1>
        <h1>Path</h1>
        <h1>Path</h1>
        <span className={styles.verticalLine}></span>
        <h2>Contribute</h2>
        <span className={styles.verticalLine}></span>
        <div className={styles.testimonials}>
          <img src={personImg} alt="Person" />
          <blockquote>"Discovery will be the biggest platform for newcomers and developers who want to master the newest blockchain technologies, come join us!"</blockquote>
          <cite>- Joe Doe</cite>
        </div>
      </div>
    );
  }
}



// import React, { Component } from 'react';
// import { Container, Button, Grid, Paper } from '@material-ui/core';

// export default class Paths extends Component {
//   render() {
//     return (
//       <Container maxWidth="lg">

//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <Paper className={classes.paper}>xs=12 sm=6</Paper>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Paper className={classes.paper}>xs=12 sm=6</Paper>
//           </Grid>
//         </Grid>


//         <header className="">
//           <div className="">
//             <h1>Path</h1>
//             <h1>Path</h1>
//             <h1>Path</h1>


//           </div>
//           {/* <img src={LandingImg} alt="Landing" className={header__img} /> */}
//         </header>

//         <main>
//           <div className="">
//             <div className="">
//               {/* <img src={StepsImg} alt="HowitworkImg2" /> */}
//               <div className="">
//                 <h2>It easy to find someone to play with!</h2>
//                 <ol className="">
//                   <li>Set up your account</li>
//                   <li>Post an event to meet</li>
//                   <li>Wait for players to join you</li>
//                   <li>Meet your players to play with</li>
//                 </ol>
//               </div>
//             </div>
//           </div>

//         </main>
//       </Container>
//     );
//   }
// }
