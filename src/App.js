import React, { Component } from 'react';

import { CardList } from './components/CardList/CardList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((reponse) => reponse.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Search monster ..." onChange={ (event) => this.setState({ searchField: event.target.value }) } />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
