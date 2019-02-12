import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ProjectList extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.projects);
    return (
      <div>Home</div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectList);