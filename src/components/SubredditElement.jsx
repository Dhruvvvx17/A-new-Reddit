import React, { Component } from 'react';
import SubredditDP from '../images/subredditPic.jpg'

class SubredditElement extends Component {
    state = {  }

    container_style = {display:"flex",flexDirection:"column",border: "1px solid black",width:170,height:"auto",margin:5,Height:200,alignItems:"center"};

    render() {
        
        const {id,subredditName,title,description,image} = this.props.subreddit;
        console.log(id,image);

        return (
            // Single User conatiner
            <div style={this.container_style} onClick={ () => this.props.goToSubreddit(subredditName)}>
                {/* Image */}
                <div style={{width:"42px",height:"42px",margin:"10px"}}>
                    <img src={SubredditDP} style={{width:"40px",height:"40px"}} alt="dp"/>
                </div>
                {/* Name */}
                <span><h3>{subredditName}</h3></span>
                <span><h5>{title}</h5></span>
                <span>{description}</span>
            </div>
        );
    }
}
 
export default SubredditElement;