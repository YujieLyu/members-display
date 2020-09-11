import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    };
    // this.handleChange=this.handleChange.bind(this) 
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }))
  }

  handleChange=e=>{
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Meet Our Team</h1>
        <SearchBox placeholder="Search Team"
          handleChange={this.handleChange} />
        <CardList users={filteredUsers}>
        </CardList>
      </div>
    );
  }

}

export default App;
