import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form form--login">
        <div className="form__title-box">
          <h2 className="form__title">Login</h2>
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">Email</label>
          <input onChange={this.handleChange} className="form__input" type="text" name="email"/>
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">Password</label>
          <input onChange={this.handleChange} className="form__input" type="text" name="password"/>
        </div>
        <div className="form__group mg-top-3">
          <button onClick={this.handleSubmit} className="btn btn--blue">Signin</button>
        </div> 
        <p>Haven't registered yet? <Link to='/signup'>Signup</Link></p>
      </form>
    )
  }
};

export default Login;