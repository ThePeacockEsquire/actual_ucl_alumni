import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, ToggleButton, ToggleButtonGroup, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Name from "./pages/name.js";
import './App.css';

class App extends Component {

  constructor(){
    super();
    var name = false;
    var yog = false;
    var troupe = false;
  }

  handleClick(item){
    if(item === this.name && true);
    if(item === this.yog && true);
    if(item === this.troupe && true);
  }

  render() {
    return (
      <div>
        <Jumbotron className="welcome">
          <Grid>
            <h1>Welcome to the UMass Comedy League's Alumni Database!</h1>
            <p>
              Here you can search through <i>almost</i> every alumni that has been through UCL and SVP   
              <small>(Silly Valley Productions 1991 - 2013)</small>
            </p>
            <ButtonGroup justified>
              <Button href="#" onClick={this.name = true} >Name</Button>
              <Button href="#" >Year of Graduation</Button>
              <Button href="#" >Troupe</Button>
          </ButtonGroup>
          </Grid>
        </Jumbotron>
        <Name />
      </div>
    );
  }
}

export default App;