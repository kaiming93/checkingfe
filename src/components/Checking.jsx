import React, {Component} from 'react';
import Success from './Success'
import * as api from '../api'

class Checking extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], lists: [], firstName:"", lastName:"", phone:"", email:"", device:"", checking:"", checkout:"", isSubmitted: false }
        this.handlefirstName = this.handlefirstName.bind(this);
        this.handlelastName = this.handlelastName.bind(this);
        this.handlephone = this.handlephone.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlechecking = this.handlechecking.bind(this);
        this.handlecheckout = this.handlecheckout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      this.setState({ device: e.target.value });
    }

    handlefirstName(event) {
      event.preventDefault();
      this.setState({ firstName: event.target.value });
    }

    handlelastName(event) {
      event.preventDefault();
      this.setState({ lastName: event.target.value });
    }
    
    handlephone(event) {
      event.preventDefault();
      this.setState({ phone: event.target.value });
    }

    handleemail(event) {
      event.preventDefault();
      this.setState({ email: event.target.value });
    }

    handlechecking(event) {
      event.preventDefault();
      this.setState({ checking: event.target.value });
    }

    handlecheckout(event) {
      event.preventDefault();
      this.setState({ checkout: event.target.value });
    }
  

    handleSubmit(event) {
      event.preventDefault();
      let object = [{ name: this.state.device, checking: this.state.checking, checkout: this.state.checkout}]
      this.addUser(object, this.state.firstName, this.state.lastName, this.state.phone, this.state.email )
      this.setState({ firstName:"", lastName:"", phone:"", email:"", device:"", checking:"", checkout:"", isSubmitted: true })
  };

  addUser(object, firstName, lastName, phone, email) {
    api.postUser(object, firstName, lastName, phone, email);
  }
    
    render() { 
        return (
            <div style={{margin: "auto", display: "table"}}>
            <br/>
            <form onSubmit={this.handleSubmit}>
        <div style={{width: "400px"}}>
        </div>
        <div style={{paddingBottom: "18px",fontSize : "24px"}}> Device Reservation</div>
        <div style={{display: "flex", paddingBottom: "18px",width : "450px"}}>
        <div style={{ marginLeft : "0", marginRight : "1%", width : "49%"}}>First name<span style={{color: "red"}}> * </span><br/>
        <input value={this.state.firstName} onChange={this.handlefirstName} type="text" id="data_2" name="data_2" style={{width: "100%"}} className="form-control"/>
        </div>
        <div style={{ marginLeft : "1%", marginRight : "0", width : "49%"}}>Last name<span style={{color: "red"}}> *</span><br/>
        <input value={this.state.lastName} onChange={this.handlelastName} type="text" id="data_3" name="data_3" style={{width: "100%"}} className="form-control"/>
        </div>
        </div><div style={{paddingBottom: "18px"}}>Phone<span style={{color: "red"}}> *</span><br/>
        <input value={this.state.phone} onChange={this.handlephone} type="text" id="data_4" name="data_4" style={{width : "450px"}} className="form-control"/>
        </div>
        <div style={{paddingBottom: "18px"}}>Email<span style={{color: "red"}}> *</span><br/>
        <input value={this.state.email} onChange={this.handleemail} type="text" id="data_5" name="data_5" style={{width : "450px"}} className="form-control"/>
        </div>
        <div style={{paddingBottom: "18px"}}>Device<span style={{color: "red"}}> *</span><br/>
        <select onChange={this.handleChange}>
          <option value={this.state.device}>Select</option>
          {this.state.lists.map((lists, index) => {
            return (<option key={index}>{lists.name}</option>)
          })}
        </select>    
        </div>
        <div style={{paddingBottom: "18px"}}>Checking date<span style={{color: "red"}}> *</span><br/>
        <input value={this.state.checking} onChange={this.handlechecking} type="date" id="data_7" name="data_7" style={{width : "250px"}} className="form-control"/>
        </div>
        <div style={{paddingBottom: "18px"}}>Checkout date<span style={{color: "red"}}> *</span><br/>
        <input value={this.state.checkout} onChange={this.handlecheckout} type="date" id="data_6" name="data_6" style={{width : "250px"}} className="form-control"/>
        </div>
        <div style={{paddingBottom: "18px"}}><input value="Submit" type="submit"/></div>
        </form>
        {this.state.isSubmitted && <Success/>}
        </div>);
    }

    componentDidMount() {
        this.fetchLists();
      };
      componentDidUpdate(prevProps) {
        if (prevProps.lists !== this.state.lists) {
          this.fetchLists();
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

      fetchLists = () => {
        api.getLists()
          .then(lists =>
            this.setState({
              lists: lists
            })
          )
      };
      
}


 
export default Checking;