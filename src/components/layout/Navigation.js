import React from 'react';
import { connect } from 'react-redux';

import SignedOutLinks from '../auth/SignedOutLinks';
import SignedInLinks from '../auth/SignedInLinks';

const Navigation = ({ auth }) => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <h1 className="main-logo">Projectify</h1>
        { auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks /> }
      </div> 
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navigation);