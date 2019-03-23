import React, { Component } from "react";
import {
  Grid,
  Jumbotron,
  Button,
  ButtonGroup,
  DropdownButton,
  MenuItem,
  Row,
  Col,
  PanelGroup,
  Modal,
  Glyphicon
} from "react-bootstrap";
import "./index.css";
import "./pages/page.css";
import List from "./pages/list";
import CardList from "./pages/CardList";
import MissionName from "./pages/missionnames.js";
import config from "./config";
import { load } from "./pages/loader";
import img from "./imgs/ucl_logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      data: [],
      button: "name",
      activeKey: "1",
      yog_data: [],
      mN_data: [],
      error: null
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.updateYOG = this.updateYOG.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
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
      this.setState({
				data: people
			 });
      const previousDate = [];
      const temp_data = [];
      for (var i = 0; i < people.length; i++) {
        if (
          previousDate.includes(people[i].graduationDate) ||
          people[i].graduationDate === undefined ||
          people[i].graduationDate === "" ||
          people[i].graduationDate === null
        ) {
          i++;
        } else {
          temp_data.push(people[i].graduationDate);
          previousDate.push(people[i].graduationDate);
        }
      }
      this.setState({ yog_data: temp_data.sort() });
    } else {
      this.setState({ error });
    }
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  updateTerm(event) {
    this.setState({
      button: event.target.value
    });
    console.log(this.state.button);
  }

  updateButton(eventKey) {
    this.setState({
      button: eventKey
    });
    console.log(this.state.button);
  }

  updateYOG(eventKey) {
    this.setState({
      button: eventKey,
      search: eventKey
    });
  }

  clearSearch(event) {
    if (event.target.value !== this.state.button) {
      this.setState({
        button: event.target.value,
        search: ""
      });
    }
  }

  render() {
    const { search, button } = this.state;
    return (
      // <div className="body">
      <div>
        <Jumbotron className="welcome">
          <Grid>
            <img src={img} alt="UMass Comedy League" className="logo" />
            <h1>UMass Comedy League Alumni Database</h1>
            <p className="here_1">
              Here you can search through <i>almost</i> every alumni that has
              been through UCL and SVP
            </p>
            <p className="info">
              <Button bsStyle="link" onClick={this.handleShow} bsSize="large">
                <Glyphicon glyph="info-sign" />
              </Button>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title bsClass="modal-title modal_center">
                    Credits
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body bsClass="modal-body modal_center">
                  <h4>
                    <u>Reaching out to alumni and collecting data</u>
                  </h4>
                  <p>
                    John Bergin (Class of 17) and Ally Whitelaw (Class of 17)
                  </p>
                  <hr />
                  <h4>
                    <u>Creating this app</u>
                  </h4>
                  <p>Cameron Pavao (Class of 18)</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
            </p>
            <p>
              <small>(Student Valley Productions 1991 - 2013)</small>
            </p>

            <input
              type="text"
              value={search}
              onChange={this.updateSearch}
              className="searchbar"
              placeholder="Search by name or troupe"
            />

            <p />

            <ButtonGroup bsSize="large" className="main_button_group">
              <Button
                bsStyle="default"
                onClick={this.clearSearch}
                value="name"
                bsSize="large"
              >
                Name
              </Button>
              <Button
                bsStyle="default"
                onClick={this.clearSearch}
                value="missionname"
                bsSize="large"
              >
                Mission Names
              </Button>
              <DropdownButton
                id="YOG"
                title="Year of Graduation"
                bsStyle="default"
                bsSize="large"
                onSelect={this.updateYOG}
              >
                {Array.from(this.state.yog_data).map(function(data, i) {
                  return (
                    <MenuItem eventKey={data} key={data}>
                      {data}
                    </MenuItem>
                  );
                })}
              </DropdownButton>
              <DropdownButton
                id="Troupe"
                title="Troupe"
                bsStyle="default"
                bsSize="large"
              >
                <MenuItem
                  onSelect={this.updateButton}
                  eventKey="Mission"
                  key="1"
                >
                  Mission
                </MenuItem>
                <MenuItem onSelect={this.updateButton} eventKey="Toast" key="2">
                  Toast
                </MenuItem>
                <MenuItem
                  onSelect={this.updateButton}
                  eventKey="Sketch 22"
                  key="3"
                >
                  Sketch 22
                </MenuItem>
                <MenuItem onSelect={this.updateButton} eventKey="IWA" key="4">
                  IWA
                </MenuItem>
                <MenuItem onSelect={this.updateButton} eventKey="OG" key="5">
                  OG
                </MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </Grid>
        </Jumbotron>
              <Row>
                <Col xs={5} md={8}>
                  <h3>
                    {" "}
                    Searching for:{" "}
                    {button === "name" || button === "missionname"
                      ? search
                      : button}{" "}
                  </h3>
                </Col>
                <Col xs={7} md={4}>
                  <p className="help">
                    See anything that's not here or any wrong information?
                  </p>
                  <div className="help">
                    {" "}
                    Let me know here
                    <Button
                      bsSize="large"
                      bsStyle="link"
                      href="https://goo.gl/forms/UaTCL0jm1VaqQgmV2"
                    >
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                    </Button>
                  </div>
                </Col>
              </Row>
              {button === "missionname" ? (
                <PanelGroup
                  accordian="true"
                  id="main list"
                  activeKey={this.state.activeKey}
                  onSelect={this.handleSelect}
                >
                  <MissionName
                    data={this.state.data}
                    mN_data={this.state.mN_data}
                    search={this.state.search}
                    button={this.state.button}
                    state={this.state}
                  />
                </PanelGroup>
              ) : (
                <CardList
                  data={this.state.data}
                  search={this.state.search}
                  button={this.state.button}
                  state={this.state}
                />
              )}
      </div>
    );
  }
}

export default App;
