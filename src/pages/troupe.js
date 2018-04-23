import React, { Component } from 'react';
import { Panel, Row, Col, Grid, PanelGroup } from 'react-bootstrap';
import List from './list.js';

class Troupe extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event){
    this.setState({search: event.target.value});
  }

  render() {
    const {search} = this.state;
    return (
      <div>
      <input type="text"
        value = {search}
        onChange = {this.updateSearch}
        className="searchbar"
        placeholder="Search"/>
        <p></p>
        <List searchTerm={search} />
      </div>
    );
  }
}

export default Troupe;
