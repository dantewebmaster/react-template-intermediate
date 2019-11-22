import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { updateValue } from '../../actions';

class HomePage extends Component {
  state = {
    fieldValue: ''
  }

  handleSetField = (event) => {
    this.setState({ fieldValue: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { fieldValue } = this.state;
    const { updateValue } = this.props;

    if (fieldValue.trim() !== '') {
      updateValue(fieldValue);
    }
    
    this.setState({ fieldValue: '' })
  }

  render() {
    const { home } = this.props;
    const { fieldValue } = this.state;

    return (
      <Container>
        <h1>Home</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Type something here..." 
            type="text" 
            value={fieldValue} 
            onChange={this.handleSetField}
          />
          <button type="submit">Update Store</button>
        </form>
        <p><span>Current value:</span> {home.value}</p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateValue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
