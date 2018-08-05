import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class YOG_TABS extends Component {
  render() {
       return (

                              //   <Tabs defaultActiveKey={'yog'} id="yog">
                        // <Tab eventKey={1} title="1991" value="1991" onClick={this.updateTerm}></Tab>
                        // <Tab eventKey={2} title="1992"></Tab>
                        // <Tab eventKey={3} title="1993"></Tab>
                      //  </Tabs>



      <Tabs defaultActiveKey={'yog'} id="yog">
          {
            
            Array.from(this.props.data).filter(null, undefined).map(function(data, i){
                return (
                    <Tab eventKey='i' title={data.graduationDate} value={data.graduationDate} ></Tab>
                );
            })
            }
        </Tabs>
    );
}
}

export default YOG_TABS;
