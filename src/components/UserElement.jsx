import React, { Component } from 'react';
import userDP from '../images/profilePic.jpg'

class UserElement extends Component {
    state = {  }

    container_style = {display:"flex",flexDirection:"column",border: "1px solid black",width:170,height:"auto",margin:5,Height:200,alignItems:"center"};

    render() { 

        const {id,username,karma,bio,image} = this.props.user;
        console.log(id,image);

        return ( 
            // Single User conatiner
            <div style={this.container_style}>
                {/* Image */}
                <div style={{width:"42px",height:"42px",margin:"10px"}}>
                    <img src={userDP} style={{width:"40px",height:"40px"}} alt="dp"/>
                </div>
                {/* Name */}
                <span><h3>{username}</h3></span>
                <span><h5>Karma:{karma}</h5></span>
                <span>{bio}</span>
            </div>
        );
    }
}
 
export default UserElement;