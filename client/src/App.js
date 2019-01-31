import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import api from './utils/api';

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

  componentDidMount(){
    this.getItemsFromDB();
  }

  addItem(inputValue){
    const body={"description":inputValue};
    api.feedbacks().create(body)
      .then((res) => {
        this.getItemsFromDB();
      })
      .catch((error) => console.log(error));
  }

  checkItem(id){
    debugger;
    var finalItems = this.state.items.map((item) => {
      if(item._id === id){
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
    api.feedbacks().delete(id)
      .then((res) => {
        this.getItemsFromDB();
      })
      .catch((error) => console.log(error));
  }

  getItemsFromDB(){
    api.feedbacks().getAll()
      .then((res) => {
        console.log(res);
        res.data.forEach(element => {
          element.checked=false;
        });
        this.setState({items:res.data});
      })
      .catch((error) => console.log(error));
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
