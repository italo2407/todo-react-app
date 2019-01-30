import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import TodoList from './components/TodoList';

class App extends Component {
  
  constructor (props){
    super(props);

    this.state = {
      items:[]
    };

    this.addItem=this.addItem.bind(this);
    this.checkItem=this.checkItem.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }

  addItem(inputValue){
    debugger;
    this.setState({
      items:this.state.items.concat(
        {
          id:uuid(),
          description:inputValue,
          date:new Date(),
          checked:false
        }
      )
    })
  }

  checkItem(id){
    debugger;
    var finalItems = this.state.items.map((item) => {
      if(item.id === id){
        item.checked =! item.checked
      } 
      return item
    });
    this.setState({
      items: finalItems,
    });
  }

  removeItem(id){
    debugger;
    var finalItems = this.state.items.filter((item) => {
      if(item.id != id) return item
    });
    this.setState({
      items: finalItems
    });
  }

  render() {
    return (
      <div className="App">
       <Layout>
         <AddTodo 
            addItem={this.addItem}
         />
         <TodoList
            items={this.state.items}
            onItemRemove={this.removeItem}
            onItemCheck={this.checkItem}
         />
      </Layout>
      </div>
    );
  }
}

export default App;
