import React, { Component } from 'react';
import { Grid, Jumbotron, Button, ButtonGroup, Row, Col, PanelGroup } from 'react-bootstrap';
import './App.css';
import alumniData from './data.json';
import'./pages/page.css';
import List from './pages/list.js'
//import Stringify from 'react-stringify';
// import GetSheetDone from 'get-sheet-done';
// var importedSheet;
//
// GetSheetDone.raw('1FWZlRP9RLfHlLGfIDbAWmQLrPLDqSsD3t3K68R3FcVo', 1).then(sheet => (
//   importedSheet=sheet,
//   console.log(importedSheet)
// ));

// import ReactGoogleSheetConnector from "react-google-sheet-connector";
// import { connectToSpreadsheet } from "react-google-sheet-connector";

// <ReactGoogleSheetConnector apiKey={'AIzaSyDtW3GSTRW5rlIAGs0zJ5QQ8gCwfvkbbCc'}
//     spreadsheetId={'1FWZlRP9RLfHlLGfIDbAWmQLrPLDqSsD3t3K68R3FcVo'} />

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
     } = this.state;
    return (
              <div className="body">
                <Jumbotron className="welcome">
                  <Grid>
                    <h1>UMass Comedy League Alumni Database</h1>
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
                      <h3> Searching for: {search} </h3>
                      <PanelGroup
                      accordian="true"
                      id="main list"
                      activeKey={this.state.activeKey}
                      onSelect={this.handleSelect}
                      >
                      <List data={this.state.data} search={this.state.search} button={this.state.button} state={this.state}/>
                      </PanelGroup>
                      </Col>
                  </Row>
                </Grid>
              </div>
    );
  }
}

export default App;
