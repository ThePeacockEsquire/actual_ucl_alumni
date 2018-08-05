import React, { Component } from 'react';
import { Grid, Jumbotron, Button, ButtonGroup, DropdownButton, MenuItem, Row, Col, PanelGroup,  Pagination } from 'react-bootstrap';
import './App.css';
import'./pages/page.css';
import List from './pages/list';
import YOG_TABS from './pages/yog_tabs';
import config from './config';
import { load } from'./pages/loader';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      data: [],
      button: 'name',
      activeKey: '1',
      yog_data: [],
      error: null
    };

    //this.handleYOG = this.handleYOG.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.updateYOG  = this.updateYOG.bind(this);
    this.clearSearch  = this.clearSearch.bind(this);
    }
    
    componentDidMount() {
      // 1. Load the JavaScript client library.
      window.gapi.load("client", this.initClient);
    }

    initClient = () => {
      // 2. Initialize the JavaScript client library.
      window.gapi.client
        .init({
          apiKey: config.apiKey,
          // Your API key will be automatically added to the Discovery Document URLs.
          discoveryDocs: config.discoveryDocs
        })
        .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad);
      });
    };

    onLoad = (data, error) => {
      if (data) {
        
        const people = data.people;
        this.setState({ data : people });
        const previousDate = [];
        const temp_data = [];
        for(var i = 0; i < people.length; i++){
          if(previousDate.includes(people[i].graduationDate) || people[i].graduationDate === undefined || people[i].graduationDate === "" || people[i].graduationDate === null){
            i++;
          } else {
            temp_data.push(people[i].graduationDate);
            previousDate.push(people[i].graduationDate);
          }
        }
        this.setState({yog_data : temp_data.sort()})


      } else {
        this.setState({ error });
      }
    };


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

  updateYOG(eventKey){
    this.setState({
      button: eventKey,
      search: eventKey
    });
  }

  clearSearch(event){
    if(event.target.value !== this.state.button){
      this.setState({
        button: event.target.value,
        search: ''
      });
    }
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
                      <small>(Student Valley Productions 1991 - 2013)</small>
                    </p>

                    <input type="text"
                      value = {search}
                      onChange = {this.updateSearch}
                      className="searchbar"
                      placeholder="Search by name or troupe"/>

                      <p></p>

                    <ButtonGroup bsSize="large" >
                        <Button bsStyle="elegant" onClick={this.clearSearch}  value='name' bsSize="large">Name</Button>
                        <DropdownButton id="YOG" title="Year of Graduation" bsStyle="elegant" bsSize="large" onSelect={this.updateYOG}>
                          { 
                            Array.from(this.state.yog_data).map(function (data, i) {
                              return (
                                <MenuItem eventKey={data}>{data}</MenuItem>
                              );
                            })
                          }
                        </DropdownButton>
                        <DropdownButton id="Troupe" title="Troupe" bsStyle="elegant" bsSize="large">
                          <MenuItem onSelect={this.updateButton} eventKey='Mission'>Mission</MenuItem>
                          <MenuItem onSelect={this.updateButton} eventKey="Toast">Toast</MenuItem>
                          <MenuItem onSelect={this.updateButton} eventKey="Sketch 22">Sketch 22</MenuItem>
                          <MenuItem onSelect={this.updateButton} eventKey="IWA">IWA</MenuItem>
                          <MenuItem onSelect={this.updateButton} eventKey="OG">OG</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                  </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                      <Col xs={12} md={12}>
                      <h3> Searching for: {(button === 'name') ? search : button}  </h3>
                      {this.state.button === 'yog' && 
                        <Pagination>
                          {console.log(this.state.yog_data)}
                          


                        </Pagination>
                      }
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
