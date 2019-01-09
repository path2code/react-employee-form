import React, { Component } from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email Id</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.userDetail.map((row, index) => {
    return (
      <tr index={index}>
        <td>{row.fName}</td>
        <td>{row.lName}</td>
        <td>{row.emailId}</td>
        <td>
          <button onClick={() => props.deleteUserData(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { userDetail, deleteUserData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody userDetail={userDetail} deleteUserData={deleteUserData} />
      </table>
    );
  }
}

export default Table;
