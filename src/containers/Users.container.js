import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';

class HomeContainer extends Component {
  render() {
    const { value } = this.props;

    return (
      <HomePage />
    )
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(HomeContainer);
