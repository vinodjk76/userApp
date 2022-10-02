import React, { Component } from 'react';
import '../Students/StudentMainApp.css';

import TableData from '../Students/TableData';
import Search from './Search';
import AddStudent from './AddStudent';
import EditStudent from './EditStudnet';
import Data from '../../StudentDataSample.json';
import Student from './Student';


export default class StudentMainApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: [],
      viewUser: {user: null, display: false},
      editUser: {user: null, display: false}
    }
    this.searchUsers    = this.searchUsers.bind(this);
    this.createNewUser  = this.createNewUser.bind(this);
    this.editUser       = this.editUser.bind(this);
    this.cancelEditUser = this.cancelEditUser.bind(this);
    this.updateEditUser = this.updateEditUser.bind(this);
    this.deleteUser     = this.deleteUser.bind(this);
    this.viewUser       = this.viewUser.bind(this);
    this.viewStudentList= this.viewStudentList.bind(this);  
  }

  
  componentWillMount() {
    // Check localStorage
    if (!localStorage.getItem('studentData')) {
      localStorage.setItem('studentData', JSON.stringify(Data))
    }
    let data = localStorage.getItem('studentData')
    this.setState({
      userData: JSON.parse(data)
    });
  }
  
  

  searchUsers(event) {
    let keyword = event.target.value.toLowerCase()
    let userData = JSON.parse(localStorage.getItem('studentData'))
    this.setState({
      userData: userData.filter((item) => {

        // Find user by Name or Phone
        return (item.name.toLowerCase().indexOf(keyword) >= 0 || item.phone.indexOf(keyword) >= 0)
      })
    })
  }

  createNewUser(newUser) {
    // Parse permisstion to number
    let newData = this.state.userData
    newUser.permission = parseInt(newUser.permission)
    newData.push(newUser)
    this.setState({
      userData: newData
    });

    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
  }

  editUser(userId) {
    var user = this.state.userData.filter((item) => item.id === userId)[0]
    this.setState({
      editUser: {user: user, display: true}
    })
  }

  cancelEditUser() {
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  updateEditUser(user) {
    const userIndex = this.state.userData.findIndex((item) => item.id === user.id)
    user = {...this.state.userData[userIndex], ...user} // update data user
    const newData = this.state.userData
    newData[userIndex] = {...user}; // update edited user to data
    this.setState({
      userData: newData
    })
    // Save to local storage
    localStorage.setItem('studentData', JSON.stringify(newData))
    
    // Hide edit form
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  deleteUser(userId) {
    const newData = this.state.userData.filter((item) => item.id !== userId)
    this.setState({
      userData: newData
    });
    // Save to local storage
    localStorage.setItem('studentData', JSON.stringify(newData))
  }

  viewUser(userId) {
    
    var user = this.state.userData.filter((item) => item.id === userId)[0]
    console.log(user)
    this.setState({
      viewUser: {user: user, display: true}
    })
  }

  viewStudentList() {
    
    var user = this.state.userData;
    console.log(user)
    this.setState({
      viewUser: {user: user, display: false}
    })
  }


  render() {
    const isViewStudent=this.state.viewUser.display;
    return (

      <div>
    
        
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Search searchUsers={this.searchUsers}/>
              <AddStudent createNewUser={this.createNewUser}/>
              
              {this.state.editUser.display && (
                <EditStudent user={this.state.editUser.user}
                  cancelEditUser={this.cancelEditUser}
                  updateEditUser={this.updateEditUser}
                />
              )}
                  <div> 
              {isViewStudent && (
              <button className="btn btn-block btn-outline-secondary" onClick={() =>this.viewStudentList()}>Students List</button>
              )}
              </div>
            </div>
            <div className="col-9">
              {isViewStudent
                ? <Student
                  users={this.state.viewUser}/>                               
                : <TableData 
                  users={this.state.userData}               
                  editUser={this.editUser}
                  deleteUser={this.deleteUser} 
                  viewUser = {this.viewUser}/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 