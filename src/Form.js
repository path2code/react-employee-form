import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      fName: "",
      lName: "",
      emailId: ""
    };

    this.state = this.initialState;
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { fName, lName, emailId } = this.state;

    return (
      <form>
        <label>First Name</label>
        <input
          type="text"
          name="fName"
          value={fName}
          onChange={this.handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lName"
          value={lName}
          onChange={this.handleChange}
        />
        <label>Email Id</label>
        <input
          type="text"
          name="emailId"
          value={emailId}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
