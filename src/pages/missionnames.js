import React, { Component } from 'react';
import { Panel, Row, Grid, PanelGroup } from 'react-bootstrap';

function searchingFor(props){
    return function(x){

        if (x.missionNameIfApplicable !== undefined && x.missionNameIfApplicable !== "" ){
         return x.missionNameIfApplicable.toLowerCase().includes(props.search.toLowerCase()) || !props;
        }
    }
  }

class MissionName extends Component {
  render() {
       return (
         <PanelGroup id="main panel">
          {
            Array.from(this.props.data).filter(searchingFor(this.props.state)).map(function(data, i){
                return (
                    <Panel eventKey={i} key={data.missionNameIfApplicable} bsClass="panel">
                    <Panel.Heading className="card special-color z-depth-2 white-text mb-0">
                        <Panel.Title toggle >
                        {data.missionNameIfApplicable}
                        </Panel.Title>
                    </Panel.Heading>
                        <Panel.Body collapsible>
                            <Grid>
                                <Row>
                                    <h4><u>Name</u></h4>
                                    <p>{data.name}</p>
                                </Row>
                                {(data.graduationDate !== "" && data.graduationDate !== undefined) &&
                                <Row>
                                    <h4><u>Class</u></h4>
                                    <p>{data.graduationDate}</p>
                                </Row>
                                 }
                                <Row>
                                    <h4><u>Troupe</u></h4>
                                    <p>{data.troupe}</p>
                                </Row>
                                {(data.whereAreTheyNow !== "" && data.whereAreTheyNow !== undefined) &&
                                    <Row>
                                        <h4><u>Where are they now</u></h4>
                                        <p>{data.whereAreTheyNow}</p>
                                    </Row>
                                    }
                                {(data.additionalInformation !== "" && data.additionalInformation !== undefined) &&
                                    <Row>
                                        <h4><u>Additional Info</u></h4>
                                        <p>{data.additionalInformation}</p>
                                    </Row>
                                }
                                </Grid>
                        </Panel.Body>
                </Panel>
                );
        }).sort(function(a, b) {
            if(a.key !== undefined){
                var nameA = a.key.toUpperCase(); // ignore upper and lowercase
                var nameB = b.key.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }

            }
            return 0;

          })
        }
        </PanelGroup>
    );
  }
}

export default MissionName;



// WEBPACK FOOTER //
// ./src/newpages/missionnames.js