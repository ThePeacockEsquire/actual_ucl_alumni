import React, { Component } from 'react';
import { Grid, Jumbotron, Button, ButtonGroup, Row, Col, Panel, PanelGroup } from 'react-bootstrap';
import './App.css';
import alumniData from './data.json';
import'./pages/page.css';
import Stringify from 'react-stringify';
//import Name  from "./pages/name.js";
//import YOG  from "./pages/yog.js";
//import Troupe  from "./pages/troupe.js";
//import TestApp from "./pages/test.js";
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function searchingFor(props){
  return function(x){
    if(props.button === 'yog'){
        return console.log(x.graduationDate);

        //x.graduationDate.includes(props.search) || !props;
    } else if(props.button === 'troupe') {
        return x.troupe.toLowerCase().includes(props.search.toLowerCase()) || !props;
    } else {
        return x.name.toLowerCase().includes(props.search.toLowerCase()) || !props;
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      data: alumniData,
      button: 'name',
      activeKey: '1'
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
  }

  handleSelect(activeKey) {
   this.setState({ activeKey });
 }

  updateSearch(event){
    this.setState({search: event.target.value});
  }

  updateTerm(event){
    this.setState({
      button: event.target.value
    });
  }

  render() {
    const {
      search,
      data = data => <Stringify value={data} />,
      button

     } = this.state;
    return (
              <div>
                console.log(data)
                <Jumbotron className="welcome">
                  <Grid>
                    <h1>Welcome to the UMass Comedy Leagues Alumni Database!</h1>
                    <p>
                      Here you can search through <i>almost</i> every alumni that has been through UCL and SVP
                       <li></li>
                      <small>(Silly Valley Productions 1991 - 2013)</small>
                    </p>

                    <input type="text"
                      value = {search}
                      onChange = {this.updateSearch}
                      className="searchbar"
                      placeholder="Search"/>

                      <p></p>

                    <ButtonGroup bsClass="btn-group main_button_group" >
                        <Button bsClass="btn btn-default main_buttons" onClick={this.updateTerm} value='name'>Name</Button>
                        <Button bsClass="btn btn-default main_buttons" onClick={this.updateTerm} value='yog'>Year of Graduation</Button>
                        <Button bsClass="btn btn-default main_buttons" onClick={this.updateTerm} value='troupe'>Troupe</Button>
                    </ButtonGroup>
                  </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                      <Col xs={12} md={12}>
                      <PanelGroup
                      accordian="true"
                      id="main list"
                      activeKey={this.state.activeKey}
                      onSelect={this.handleSelect}
                      >

                          {
                          Array.from(data).filter(searchingFor(this.state)).map(function(data, i){
                              return (
                                <Panel eventKey={i}>
                                    <Panel.Heading>
                                        <Panel.Title toggle>
                                        {data.name}
                                        </Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Collapse>
                                        <Panel.Body>
                                            <Grid>
                                                <Row>
                                                    <h4><u>Class</u></h4>
                                                    <p>{data.graduationDate}</p>
                                                </Row>
                                                <Row>
                                                    <h4><u>Troupe</u></h4>
                                                    <p>{data.troupe}</p>
                                                </Row>
                                                <Row>
                                                    <h4><u>Mission Name</u></h4>
                                                    <p>{data.missionNameIfApplicable}</p>
                                                </Row>
                                                <Row>
                                                    <h4><u>Where are they now</u></h4>
                                                    <p>{data.whereAreTheyNow}</p>
                                                </Row>
                                                <Row>
                                                    <h4><u>Additional Info</u></h4>
                                                    <p>{data.additionalInformation}</p>
                                                </Row>
                                            </Grid>
                                        </Panel.Body>
                                    </Panel.Collapse>
                                </Panel>
                              );
                        })
                        }
                      </PanelGroup>
                      </Col>
                  </Row>
                </Grid>
              </div>
    );
  }
}

export default App;
