import React, { Component } from 'react';

import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
          <SearchBox placeholder="Search monsters ..." handleOnChange={ (event) => this.setState({ searchField: event.target.value }) } />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
