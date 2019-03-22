import React, { Component } from "react";
import Button from "./Button";
class Todo extends Component {
  componentWillReceiveProps() {
    console.log(this.props);
  }
  render() {
    var array = this.props.data;
    let del = this.props.delete;
    let edit = this.props.edit;
    return (
      <ol>
        {array.map(x => (
          <React.Fragment>
            <li key={x}>{x}</li>
            <Button fun={del} id={x}>
              Delete
            </Button>
          </React.Fragment>
        ))}
      </ol>
    );
  }
}

export { Todo };
