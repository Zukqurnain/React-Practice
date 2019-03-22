import React, { Component } from "react";
import { Todo } from "./todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log("abc", props);
  }
  state = {
    arr: [],
    value: ""
  };

  componentWillReceiveProps(prevProp) {
    console.log("cde", prevProp);
  }

  OnChange = e => {
    let event = e.target.value;
    this.setState({ value: event });
  };

  onEdit = e => {
    let value = e.target.value;
    this.setState(value);
    return <input type="text" value={this.state.arr} />;
  };

  addTodo = () => {
    if (this.state.value) {
      let value = this.state.arr;
      value.push(this.state.value);
      this.setState({ arr: value, value: "" });
    } else {
      alert("Please Input");
    }
  };

  deleteTodo = id => {
    var filter = this.state.arr.filter(x => x !== id);
    this.setState({ arr: filter });
  };

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <input type="text" onChange={this.OnChange} value={this.state.value} />
        <button onClick={this.addTodo}>Add</button>
        <Todo
          data={this.state.arr}
          edit={this.editTodo}
          delete={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoList;
