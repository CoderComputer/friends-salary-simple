import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Friends.css';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
const Friends = (props) => {
    console.log(props)
    return (
        <div className = "content">
            <div className = "container">
                <div className = "profile">
                <div className = "img-container">
                    <div className = "profic_pic">
                    <img src= {props.image} alt=""/>
                    </div>
                </div>
                <div className = "details-container">
                    <h2>Username: {props.username}</h2>
                        <p>Name: {props.name}</p>
                        <p>Email: {props.email}</p>
                        <p>Phone: {props.phone}</p>
                        <p>Website: {props.website}</p>
                    <h2>Salary: ${props.salary}</h2>
                    <button className = "addFriend"
                        onClick = {()=>props.handleAdd(props.salary)}
                    ><FontAwesomeIcon icon={faUserFriends} /><span> -</span> Add Friend</button>
                </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Friends;