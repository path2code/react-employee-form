import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class Apps extends Component {
  state = {
    userDetail: [
      { fName: "Aakriti", lName: "Gangwal", emailId: "aakriti1711@gmail.com" },
      {
        fName: "Akshansh",
        lName: "Jain",
        emailId: "vishuaki237@gmail.com"
      }
    ]
  };
  deleteUserData = index => {
    const { userDetail } = this.state;
    this.setState({
      userDetail: userDetail.filter((user, i) => {
        return i !== index;
      })
    });
  };
  handleSubmit = userDetail => {
    this.setState({ userDetail: [...this.state.userDetail, userDetail] });
  };

  render() {
    const { userDetail } = this.state;

    return (
      <div className="container">
        <Table userDetail={userDetail} deleteUserData={this.deleteUserData} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Apps;
