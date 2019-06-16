import React, { Component } from 'react';
import { Panel, Col, Row, Grid, PanelGroup } from 'react-bootstrap';
import unknown_pic from "../imgs/unknown_pic.png";


function searchingFor(props){
  return function(x){
    //console.log(x);
    if (x.troupe !== undefined){
      if(props.button === props.search){
        //console.log(x.graduationDate);
        return x.graduationDate.includes(props.search) || !props;
      } else if(props.button === 'Mission') {
        return x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props;
      } else if(props.button === 'Toast') {
        return x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props;
      } else if(props.button === 'Sketch 22') {
        return x.troupe.toLowerCase().includes("sketch") || !props;
      } else if(props.button === 'IWA') {
        return x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props;
      } else if(props.button === 'OG') {
        return x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props;
      } else {
        return x.name.toLowerCase().includes(props.search.toLowerCase()) || !props;
      }
    }
  }
}

class List extends Component {
  render() {
    return (
      <PanelGroup id="List" accordian="true">
        {

          Array.from(this.props.data).filter(searchingFor(this.props.state)).map(function(data, i){
            return (

              <Panel eventKey={i} key={data.name} bsClass="panel">
                <Panel.Heading className="card special-color z-depth-2 white-text mb-0">
                  <Panel.Title toggle >
                    {data.name}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    <Grid>
                      <Col xs={4}>
                        {(data.picLink !== "" && data.picLink !== undefined) ?
                          <Row>
                            {/* <img src={data.picLink} alt="Profile Pic" style={{width:300, height:300}} /> */}
                            <img src={unknown_pic} alt="Profile Pic" style={{width:300, height:300, filter: 'drop-shadow(8px 8px 10px black)'}} />
                          </Row>
                          :
                          <Row>
                            <img src={unknown_pic} alt="Profile Pic" style={{width:300, height:300, filter: 'drop-shadow(8px 8px 10px black)'}} />
                          </Row>
                        }
                      </Col>
                      <Col xs={8}>
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
                        {(data.missionNameIfApplicable !== "" && data.missionNameIfApplicable !== undefined)  &&
                          <Row>
                            <h4><u>Mission Name</u></h4>
                            <p>{data.missionNameIfApplicable}</p>
                          </Row>
                        }
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
                      </Col>
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
