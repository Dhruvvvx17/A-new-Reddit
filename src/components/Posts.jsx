import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {

    render() { 

        const {allPosts,onUpvote,onDownvote} = this.props;

        return ( 
            <div>
                {allPosts.map(post => (
                    <Post key={post.id}
                    post = {post}
                    onUpvote = {onUpvote}
                    onDownvote = {onDownvote}
                    />
                ))
                }
            </div>            
        );
    }
}
 
export default Posts;