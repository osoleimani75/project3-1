import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
class Login extends Component {

  componentWillMount() {
    // console.log(this.props)
    if (this.props.auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/`);
      })
      .catch(err => { 
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h1 className="salehead">Login</h1>
            <div className="saleCard " >
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input className="form-control"
                    placeholder="Email goes here..."
                    name="email"
                    type="email"
                    id="email"
                    style={{ width: "500px" }}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input className="form-control"
                    placeholder="Password goes here..."
                    name="password"
                    type="password"
                    id="pwd"
                    style={{ width: "500px" }}
                    onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
              <p><Link to="/signup">Go to Signup</Link></p>
            </div>
          </div>
        </div>

    );
  }
}

export default Login;