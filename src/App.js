import React, { Component } from 'react';
import { Grid, Jumbotron, Button, ButtonGroup, DropdownButton, MenuItem, Row, Col, PanelGroup } from 'react-bootstrap';
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
    this.updateButton = this.updateButton.bind(this);
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
    console.log(this.state.button);
  }

  updateButton(eventKey){
    this.setState({
      button: eventKey
        });
    console.log(this.state.button);
  }

  render() {
    const {
      search,
      button,
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
                      placeholder="Search by name or troupe"/>

                      <p></p>

                    <ButtonGroup >
                        <Button  onClick={this.updateTerm} value='name'>Name</Button>
                        <Button  onClick={this.updateTerm} value='yog'>Year of Graduation</Button>
                        <DropdownButton title="Troupe">
                          <MenuItem  onSelect={this.updateButton} eventKey='Mission'>Mission</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="Toast">Toast</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="Sketch 22">Sketch 22</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="IWA">IWA</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="OG">OG</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                  </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                      <Col xs={12} md={12}>
                      <h3> Searching for: {(button === 'name') ? search : button}  </h3>
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
