import React, { Component } from 'react';
import SearchAppBar from './components/SearchAppBar';
import CommentInput from './components/CommentInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <CommentInput />
      </div>
    );
  }
}

export default App;
