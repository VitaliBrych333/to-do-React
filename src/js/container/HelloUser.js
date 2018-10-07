import React, {Fragment} from "react";
import Hello from "../presentational/Hello";
import HelloInput from "../presentational/HelloInput";

let idGenerator = 0;

class HelloUser extends React.Component {
  state = {
    name: "",
    users: []
    };
     
  addUserHandler = () => {
    this.setState({ users: [...this.state.users, {id: idGenerator++, name: this.state.name}] });
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  }

  render() {
    const users = this.state.users;
    const helloUsersElements = users.map((user, index) => (
      <Hello key={user.id} name={user.name}/>
    ));
  
    return (
      <Fragment>
        <HelloInput handleChange={this.handleChange} addUserHandler={this.addUserHandler}/>
        {
          helloUsersElements
        }       
      </Fragment> 
     
    )
  }
}

export default HelloUser;