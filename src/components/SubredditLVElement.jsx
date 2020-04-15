import React, { Component } from 'react';

class SubredditLVElement extends Component {
    state = {  }

    container_style = {display:"flex",flexDirection:"column",border: "1px solid black",width:200,height:"auto",margin:5};

    render() { 

        return (
            
            // Single subreddit name conatiner
            <div style={this.container_style}>
                {/* Name */}
                <span style={{textAlign:"center"}}><h3>{this.props.name}</h3></span>
            </div>

        );
    }
}
 
export default SubredditLVElement;