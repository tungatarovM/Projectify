import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../../actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username, email, password } = this.state;
    this.props.signUp({username, email, password});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form__title-box">
          <h2 className="form__title">Signup</h2>
        </div>
        <div className="form__group">
          <label htmlFor="username" className="form__label">Username</label>
          <input  onChange={this.handleChange} className="form__input" type="text" name="username"/>
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
        <p>Already a member? <Link to='/login'>Login</Link></p>
      </form>
    )
  }
};

export default connect(null, { signUp })(SignUp);