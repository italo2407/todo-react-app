import React, { Component } from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import CommentInput from './components/CommentInput';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchAppBar />
        <div>
          <CommentInput />
        </div>
      </div>
    );
  }
}

export default App;
