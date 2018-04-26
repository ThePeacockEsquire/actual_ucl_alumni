import React, { Component } from 'react';
import { Panel, Row, Grid, PanelGroup } from 'react-bootstrap';

function searchingFor(props){
    return function(x){
        return x.missionNameIfApplicable.toLowerCase().includes(props.search.toLowerCase()) || !props;
    }
  }

class MissionName extends Component {
  render() {
       return (
         <PanelGroup>
          {
            Array.from(this.props.data).filter(searchingFor(this.props.state)).map(function(data, i){
                return (
                <Panel eventKey={i} >
                    <Panel.Heading>
                        <Panel.Title toggle>
                        {data.missionNameIfApplicable}
                        </Panel.Title>
                    </Panel.Heading>
                        <Panel.Body collapsible>
                            <Grid>
                                <Row>
                                    <h4><u>Name</u></h4>
                                    <p>{data.name}</p>
                                </Row>
                                <Row>
                                    <h4><u>Class</u></h4>
                                    <p>{data.graduationDate}</p>
                                </Row>
                                <Row>
                                    <h4><u>Troupe</u></h4>
                                    <p>{data.troupe}</p>
                                </Row>
                                {(data.whereAreTheyNow != null) &&
                                    <Row>
                                        <h4><u>Where are they now</u></h4>
                                        <p>{data.whereAreTheyNow}</p>
                                    </Row>
                                }
                                {(data.additionalInformation != null) &&
                                    <Row>
                                        <h4><u>Additional Info</u></h4>
                                        <p>{data.additionalInformation}</p>
                                    </Row>
                                }
                                </Grid>
                        </Panel.Body>
                </Panel>
                );
        })
        }
        </PanelGroup>
    );
  }
}

export default MissionName;
