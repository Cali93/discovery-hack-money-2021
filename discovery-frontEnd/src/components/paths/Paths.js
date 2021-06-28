
import React, { Component } from 'react';
import { Container, Button } from '@material-ui/core';

export default class Paths extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <header className="">
          <div className="">
            <h1>Path</h1>
            <h1>Path</h1>
            <h1>Path</h1>


          </div>
          {/* <img src={LandingImg} alt="Landing" className={header__img} /> */}
        </header>

        <main>
          <div className="">
            <div className="">
              {/* <img src={StepsImg} alt="HowitworkImg2" /> */}
              <div className="">
                <h2>It easy to find someone to play with!</h2>
                <ol className="">
                  <li>Set up your account</li>
                  <li>Post an event to meet</li>
                  <li>Wait for players to join you</li>
                  <li>Meet your players to play with</li>
                </ol>
              </div>
            </div>
          </div>

        </main>
      </Container>
    );
  }
}
