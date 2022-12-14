import React, { Component } from 'react'
const uuidv1 = require('uuid/v1');

export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddUser: false,
      addUserDone: false
    }
    this.isInputChange = this.isInputChange.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
  }

  isInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  submitNewUser() {
    const newUser = {
      id: uuidv1(),
      name: this.state.name,
      address:this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      permission: this.state.permission

    }
    this.props.createNewUser(newUser)

    this.setState({
      addUserDone: !this.state.addUserDone
    });
  }

  showAddUser() {
    this.setState({
      showAddUser: !this.state.showAddUser
    })
  }

  render() {
    if (!this.state.showAddUser) {
      return (
        <button className="btn btn-block btn-outline-info" onClick={() => this.showAddUser()}>Add student</button>
      )
    } else {
      return (
        <div>
          {this.state.addUserDone && (
            <div className="alert alert-success mt-3">
              Student was created!
            </div>
          )}
          <div className="card w-100 mt-2 border-primary">
            <div className="card-header bg-info text-light">Add Student</div>
            <div className="card-body text-primary">
              <form>
                <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder="Student name" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="address" className="form-control" placeholder="Address" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="phone" className="form-control" placeholder="Phone" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <select className="form-control" name="permission" defaultValue={0} onChange={this.isInputChange}>
                    <option value={0} disabled>Select Course</option>
                    <option value={1}>Basic</option>
                    <option value={2}>Advance</option>
                  </select>  
                </div>
                <button type="reset" className="btn btn-info btn-block" 
                  onClick={this.submitNewUser}>Submit
                </button>
                <button className="btn btn-block btn-outline-secondary" 
                  onClick={() => this.showAddUser()}>Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
  
      )
    }
  }
}
