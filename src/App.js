import React, { Component } from 'react';
import { Grid, Jumbotron, Button, ButtonGroup, DropdownButton, MenuItem, Row, Col, PanelGroup, Glyphicon, Modal } from 'react-bootstrap';
import './App.css';
import alumniData from './data.json';
import missionNames from './missionnames.json'
import'./newpages/page.css';
import List from './newpages/list.js';
import MissionName from './newpages/missionnames.js';
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
      activeKey: '1',
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
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
                      <p className="info"><Button bsStyle="link" onClick={this.handleShow} bsSize="large"><Glyphicon glyph="info-sign" /></Button>
                        <Modal show={this.state.show} onHide={this.handleClose} >
                          <Modal.Header closeButton>
                            <Modal.Title bsClass="modal-title modal_center">Credits</Modal.Title>
                          </Modal.Header>
                          <Modal.Body bsClass="modal-body modal_center">
                            <h4><u>Reaching out to alumni and collecting data</u></h4>
                            <p>John Bergin (Class of 17) and Ally Whitelaw (Class of 17)</p>
                            <hr />
                            <h4><u>Creating this app</u></h4>
                            <p>Cameron Pavao (Class of 18)</p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                          </Modal.Footer>
                        </Modal>
                      </p>
                      <small>(Silly Valley Productions 1991 - 2013)</small>
                    </p>

                  <Row>
                    <input type="text"
                      value = {search}
                      onChange = {this.updateSearch}
                      className="searchbar"
                      placeholder="Search by name or troupe"/>
                  </Row>




                      <p></p>
                  <Row>
                    <ButtonGroup bsClass="btn-group main_button_group" >
                        <Button  onClick={this.updateTerm} value='name' bsClass="btn main_buttons">Name</Button>
                        <Button  onClick={this.updateTerm} value='missionname' bsClass="btn main_buttons">Mission Names</Button>
                        <DropdownButton title="Troupe" bsStyle="btn main_buttons">
                          <MenuItem  onSelect={this.updateButton} eventKey='Mission'>Mission</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="Toast">Toast</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="Sketch 22">Sketch 22</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="IWA">IWA</MenuItem>
                          <MenuItem  onSelect={this.updateButton} eventKey="OG">OG</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                  </Row>

                  </Grid>
                </Jumbotron>
                <Grid>
                    <Row>

                      <Col xs={12} md={12}>
                        <Row>
                          <Col xs={5} md={8}>
                            <h3> Searching for: {(button === 'name' || button ==='missionname') ? search : button} </h3>
                          </Col>
                          <Col xs={7} md={4}>
                            <p className="help">See anything that's not here or any wrong information? Let me know here<Button bsStyle="link" href="https://goo.gl/forms/UaTCL0jm1VaqQgmV2"><Glyphicon glyph="envelope" /></Button></p>
                          </Col>
                        </Row>



                        <PanelGroup
                          accordian="true"
                          id="main list"
                          activeKey={0}
                          onSelect={this.handleSelect}
                          >
                          {(button === 'missionname') ? <MissionName data={missionNames} search={this.state.search} button={this.state.button} state={this.state}/> :
                            <List data={this.state.data} search={this.state.search} button={this.state.button} state={this.state}/>
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
