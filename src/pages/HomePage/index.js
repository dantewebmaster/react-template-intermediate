import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { updateValue } from '../../actions';

class HomePage extends Component {
  render() {
    const { updateValue, home } = this.props;

    return (
      <Container>
        <h1 onClick={() => updateValue('foda-se')}>Home</h1>
        <input type="text" onChange={e => updateValue(e.target.value)} />
        <div>{home.value}</div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateValue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
