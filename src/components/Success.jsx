import React, { Component } from 'react';
import * as api from '../api'

class Success extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }
    render() {
        return (
            <div>
                <h1>Success</h1>
                <hr />
                <h2>All Users Information</h2>
                <hr />
                {this.state.users.map((user, index) =>{
                    return (<div key={index}>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <h2>{user.phone}</h2>
                        <h2>{user.email}</h2>
                        {user.object[0]? <p>Device: {user.object[0].name}</p>: <p>No device</p>}
                        {user.object[0] && user.object[0].checking !== undefined? <p>Check in at {user.object[0].checking}</p>: <p>No check in Date</p>}
                        {user.object[0] && user.object[0].checkout !== undefined? <p>Check out at {user.object[0].checkout}</p>: <p>No check out Date</p>}
                        <hr />
                    </div>)
                })}
            </div>
        );
    }

    componentDidMount() {
        this.fetchUsers();
      };
      componentDidUpdate(prevProps) {
        if (prevProps.users !== this.state.users) {
          this.fetchUsers();
        }
      }
      
      fetchUsers = () => {
        api.getUsers()
          .then(users =>
            this.setState({
              users: users.reverse()
            })
          )
      };
}

export default Success;