import React, { Component } from 'react';
import { Panel, Row, Grid, PanelGroup } from 'react-bootstrap';
import data from './data.json';



class Name extends Component {
  render() {
    return (
      <div>
        <PanelGroup accordian>
            {
              data.map(function(data){
                return (
                  <Panel>
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
      </div>
    );
  }
}

export default Name;
