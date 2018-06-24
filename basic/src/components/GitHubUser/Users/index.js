import React, { Component } from 'react';
import UserList from './UserList';

class Users extends Component {

    render() {
        return (
            <div className="GitHubUser-item">
                <div className="GitHubUser-text-left GitHubUser-bolder">
                    <p>List:</p>
                </div>
                <div className="GitHubUser-container GitHubUser-text-left">
                    <div className="GitHubUser-user-id">
                        <p>ID</p>
                    </div>
                    <div className="GitHubUser-user-item">
                        <p>username</p>
                    </div>
                    <div className="GitHubUser-user-item">
                        <p>image</p>
                    </div>
                </div>
                {this.props.data.map(user =>
                    <UserList id={user.id} name={user.login} avatar_url={user.avatar_url} 
                        key={user.id} eventHandler={this.props.eventHandler} />
                )}
            </div>
        )
    }
}

export default Users;