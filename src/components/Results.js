import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  PanelGroup,
} from "react-bootstrap";
import Map from "../pages/Map.js";
import MissionName from "../pages/missionnames.js";
import List from "../pages/List.js";

export default class Results extends Component {
  render() {
    const state = this.props.state;
    const {
      button,
      search,
      data,
      mN_data,
    } = state;

    return (
      <div>
        <Row style={{ margin: "auto" }}>
          <Col xs={5} md={8}>
            <h3 style={{ padding: 10, margin: 10 }}>
              Searching for:{" "}
              {button === "Name" || button === "Mission Name" ? search : ""}
            </h3>
          </Col>
          <Col xs={7} md={4}>
            <div className="help">
              Contact
              <Button
                // bsSize="large"
                bsStyle="link"
                href="https://goo.gl/forms/UaTCL0jm1VaqQgmV2"
              >
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </Button>
            </div>
          </Col>
        </Row>
        {button === "Map" && <Map data={data} />}
        {button === "Mission Name" && (
          <PanelGroup
            accordian="true"
            id="main list"
            onSelect={this.handleSelect}
          >
            <MissionName
              data={data}
              mN_data={mN_data}
              search={search}
              button={button}
              state={state}
            />
          </PanelGroup>
        )}
        {button !== "Mission Name" && button !== "Map" && (
          <List
            data={data}
            search={search}
            button={button}
            state={state}
          />
          // <CardList
          //   data={data}
          //   search={search}
          //   button={button}
          //   state={state}
          // />
        )}
      </div>
    );
  }
}
