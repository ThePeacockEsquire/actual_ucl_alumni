import React, { Component } from 'react';
import { Grid, Jumbotron, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import Name  from "./pages/name.js";
import YOG  from "./pages/yog.js";
import Troupe  from "./pages/troupe.js";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
            <Router>
              <div>
                <Jumbotron className="welcome">
                  <Grid>
                    <h1>Welcome to the UMass Comedy Leagues Alumni Database!</h1>
                    <p>
                      Here you can search through <i>almost</i> every alumni that has been through UCL and SVP
                      <small>(Silly Valley Productions 1991 - 2013)</small>
                    </p>
                    <ButtonGroup justified>
                      <Link to={'/name/'}>
                        <Button bsStyle="primary">Name</Button>
                      </Link>
                      <Link to={'/yog/'}>
                        <Button>Year of Graduation</Button>
                      </Link>
                      <Link to={'/troupe/'}>
                        <Button>Troupe</Button>
                      </Link>
                  </ButtonGroup>
                  </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                      <Col xs={12} md={12}>
                        <Route path="/name/" render={({ match }) => (
                          <Name />
                        )} />
                        <Route path="/yog/" render={({ match }) => (
                          <YOG />
                        )} />
                        <Route path="/troupe/" render={({ match }) => (
                          <Troupe />
                        )} />
                      </Col>
                  </Row>
                </Grid>
              </div>
            </Router>
    );
  }
}

export default App;
