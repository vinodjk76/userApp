import React, { Component } from 'react';


export default class Student extends Component {
  render() {    
    const user= this.props.users.user;
    return (
      <div className="table-user">
        <table className="table table-striped table-hover"  >
      
          <tbody>
          <tr><td colSpan={2} ><center><b>STUDENT DETAILS</b></center></td></tr>
              <tr scope="col">
                  <td><b>Name:</b> {user.name} </td>
                  <td rowSpan={3}>
                  <img src="" className="rounded float-right"  alt="img"></img>
                </td></tr>
              <tr scope="col"><td><b>Email:</b> {user.email}</td></tr>
              <tr scope="col"><td><b>Address:</b> {user.address}</td></tr>              
              </tbody>
        </table>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
             <th scope="col">S#</th>
              <th scope="col">Class</th>
              <th scope="col">Venue</th>
              <th scope="col">Date</th>
              <th scope="col">Instructor</th>  
              <th scope="col">Certificate</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
            <td scope="col">1</td>
              <td scope="col">Basic</td>
              <td scope="col">Sangareddy</td>
              <td scope="col">02-05-1975</td>
              <td scope="col">Vinod</td>              
              <td scope="col">File</td>              
            </tr>
          </tbody>
          
          </table>
      </div>

    )
  }
}
