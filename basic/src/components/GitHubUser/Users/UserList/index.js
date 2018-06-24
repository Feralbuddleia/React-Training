import React, { PureComponent } from 'react'

class UserList extends PureComponent {

    render() {
        return (
            <div className="GitHubUser-container GitHubUser-text-left">
                <div className="GitHubUser-user-id">
                    <p>{this.props.id}</p>
                </div>
                <div className="GitHubUser-user-item">
                    <p onClick={this.props.eventHandler}>{this.props.name}</p>
                </div>
                <div className="GitHubUser-user-item">
                    <img src={this.props.avatar_url} alt="" className="GitHubUser-img" />
                </div>
            </div>
        )
    }
}

export default UserList;