import React, { Component } from 'react';
import { Panel, Row, Col, Grid, PanelGroup } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Row>
                <Col xs={12} md={12}>
                <PanelGroup accordian>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title toggle>
                            Cameron Pavao
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <Grid>
                                    <Row>
                                        <h4><u>Class</u></h4>
                                        <p>2018</p>
                                    </Row>
                                    <Row>
                                        <h4><u>Troupe</u></h4>
                                        <p>Mission, Toast</p>
                                    </Row>
                                    <Row>
                                        <h4><u>Mission Name</u></h4>
                                        <p>Esquire</p>
                                    </Row>
                                    <Row>
                                        <h4><u>Where are they now</u></h4>
                                        <p>Chicago, IL</p>
                                    </Row>
                                    <Row>
                                        <h4><u>Additional Info</u></h4>
                                        <p>Was Producer of Mission for a semester and Director of Toast senior year</p>
                                    </Row>
                                </Grid>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </PanelGroup>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;