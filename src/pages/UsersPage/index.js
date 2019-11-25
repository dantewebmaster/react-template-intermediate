import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { UsersList, User, ErrorMessage } from './styles';
import * as usersActions from '../../actions';

class UsersPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { list, error } = this.props.users;
    return (
      <>
        <UsersList>
          <h1>Users</h1>
          {list.map(user => (
            <User key={user.login.uuid}>
              <img src={user.picture.medium} alt={user.name.first} />
              <h3>{user.name.first} {user.name.last}</h3>
            </User>
          ))}
        </UsersList>
        {error && (
          <ErrorMessage>{error}</ErrorMessage>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...usersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
