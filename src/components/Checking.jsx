import React, {Component} from 'react';
import * as api from '../api'

class Checking extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
        console.log(this.state.users)
    }
    render() { 
        return (<body>
            <div style={{margin: "auto", display: "table"}}>
            <br/>
            <form method="post" action="https://www.100forms.com/s/1c7f84ca-6fd3-4ca3-a9c4-1175cc4d5c3b"  onSubmit="return validateForm();">
        <div style={{width: "400px"}}>
        </div>
        <div style={{paddingBottom: "18px",fontSize : "24px"}}> Device Reservation</div>
        <div style={{display: "flex", paddingBottom: "18px",width : "450px"}}>
        <div style={{ marginLeft : "0", marginRight : "1%", width : "49%"}}>First name<span style={{color: "red"}}> * </span><br/>
        <input type="text" id="data_2" name="data_2" style={{width: "100%"}} className="form-control"/>
        </div>
        <div style={{ marginLeft : "1%", marginRight : "0", width : "49%"}}>Last name<span style={{color: "red"}}> *</span><br/>
        <input type="text" id="data_3" name="data_3" style={{width: "100%"}} className="form-control"/>
        </div>
        </div><div style={{paddingBottom: "18px"}}>Phone<span style={{color: "red"}}> *</span><br/>
        <input type="text" id="data_4" name="data_4" style={{width : "450px"}} className="form-control"/>
        </div>
        <div style={{paddingBottom: "18px"}}>Email<span style={{color: "red"}}> *</span><br/>
        <input type="text" id="data_5" name="data_5" style={{width : "450px"}} className="form-control"/>
        </div>
        <div style={{paddingBottom: "18px"}}>Device<span style={{color: "red"}}> *</span><br/>
        <select>
          {this.state.users.map(user => {
            return (<option value={user.name}>{user.name}</option>)
          })}
        {/* <option value="device1">Device 1</option>
        <option value="device2">Device 2</option>
        <option value="device3">Device 3</option>
        <option value="device4">Device 4</option> */}
        </select>    
        </div>
        <div style={{paddingBottom: "18px"}}>Checkout date<span style={{color: "red"}}> *</span><br/>
        <input type="text" id="data_6" name="data_6" style={{width : "250px"}} className="form-control"/>
        </div>
        
        <div style={{paddingBottom: "18px;"}}>Checkin date<span style={{color: "red;"}}> *</span><br/>
        <input type="text" id="data_7" name="data_7" style={{width : "250px"}} className="form-control"/>
        </div>
        
        <div style={{paddingBottom: "18px;"}}>Questions / Comments<br/>
        <textarea id="data_10" false name="data_10" style={{width : "450px;"}} rows="6" className="form-control"></textarea>
        </div>
        <div style={{paddingBottom: "18px;"}}><input name="skip_Submit" value="Submit" type="submit"/></div>
        </form>
            
            </div>
            <div>
              {this.state.users.map(user => {
                return (<div>{user.name}</div>)
              })}
            </div>
        </body> );
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
              users: users
            })
          )
      };
      
}


 
export default Checking;