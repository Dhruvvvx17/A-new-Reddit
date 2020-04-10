import React, { Component } from 'react';

class PostDescription extends Component {

    render() { 

        const desc = this.props.desc;

        return ( 
                <p>
                    {desc}
                </p>
        );
    
    }
}
 
export default PostDescription;