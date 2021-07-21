import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handeSubmit = (event) => {
    event.preventDefault()
    if(this.state.username && this.state.password !== "") {
        this.props.handleLogin(this.state) 
    }
  }


  render() {
    return (
      <form onSubmit={this.handeSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
