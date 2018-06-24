import React, { Component } from 'react';
import axios from 'axios';

class InfoBox extends Component {


    render() {
        console.log(this.props.currUser);
        return (
            <div className="GitHubUser-item" >
                <div className="GitHubUser-fixed">
                    <div className="GitHubUser-text-left GitHubUser-bolder">
                        <p> Detail:</p>
                    </div>
                    <div className="GitHubUser-detail-box">
                        {this.props.currUser && (
                        <div className="GitHubUser-text-left">
                            <p>name: {this.props.currUser.name}</p>
                            <p>location: {this.props.currUser.location}</p>
                            <p>Following:{this.props.currUser.following}</p>
                            <p>Followers: {this.props.currUser.follower}</p>
                        </div> 
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
       
}

export default InfoBox;