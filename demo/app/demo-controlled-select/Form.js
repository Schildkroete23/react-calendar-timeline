import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //	opened: false,
    };
  }

  render(props) {
    console.log("test34");
    if (this.props.items) {
        console.log(this.props.items.title);
    }
    return (
      <form className="loginform">
        <div className="center">
          <input type="text" placeholder="Enter Project Name" required />
          <button>Create!{this.props.items? this.props.items.title : "test"}</button>
        </div>
      </form>
    );
  }
}

export default Form;
