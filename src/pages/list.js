import React, { Component } from 'react';
import { Panel, Row, Grid, PanelGroup } from 'react-bootstrap';

function searchingFor(props){
    return function(x){
      if(props.button === 'yog'){
          return console.log(x.graduationDate); 
          //x.graduationDate.includes(props.search) || !props;
      } else if(props.button === 'troupe') {
          return x.troupe.toLowerCase().includes(props.search.toLowerCase()) || !props;
      } else {
          return x.name.toLowerCase().includes(props.search.toLowerCase()) || !props;
      }
    }
  }

class List extends Component {
  render() {
       return (
      <PanelGroup accordian>
          {
            Array.from(this.props.data).filter(searchingFor(this.props.state)).map(function(data, i){
                return (
                <Panel eventKey={i}>
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
                                {(data.missionNameIfApplicable != null) &&
                                    <Row>
                                        <h4><u>Mission Name</u></h4>
                                        <p>{data.missionNameIfApplicable}</p>
                                    </Row>
                                    }
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
                    </Panel.Collapse>
                </Panel>
                );
        })
        }
      </PanelGroup>
    );
  }
}

export default List;
