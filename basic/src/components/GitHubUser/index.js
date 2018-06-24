import React, { Component } from 'react';
import InfoBox from './InfoBox';
import Users from './Users';
import axios from 'axios';
import './GitHubUser.css';

class GitHubUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currUser: null
        };
    }

    componentDidMount() {
        const url = "https://api.github.com/users?per_page=100";
        axios(url)
        .then(res => {
            //console.log(res.data);
            this.setState({
                users: res.data
            });
        })
        .catch(err => {
            console.error(err);
        });
    }

    showUserInfo = (e) => {
        this.getUserDetail(e.target.innerHTML);

    }

    getUserDetail = (name) => {
        
        const url = "https://api.github.com/users/" + name;
        console.log(url);
        axios(url)
        .then(res => {
            const user = res.data;
            this.setState({
                currUser: {
                    name: name,
                    location: user.location,
                    following: user.following,
                    follower: user.follower
                }
            })
        });
        
    }

    render() {
        return (
            <div className="GitHubUser-container">
                <Users data={this.state.users} eventHandler={this.showUserInfo} />
                <InfoBox currUser={this.state.currUser} />
            </div>
        )
    }
}

export default GitHubUser;