import React, { Component } from 'react';
import Post from './Post'

// <Posts> module receives all posts at once from the MainFeed.
// Runs a map function and calls <post> module repetedly for every post in the allPosts array.

class Posts extends Component {

    render() { 

        const {allPosts,onUpvote,onDownvote,followSubreddit,goToSubreddit} = this.props;

        return ( 
            <div>
                {allPosts.map(post => (
                    <Post key={post.id}
                    post = {post}
                    onUpvote = {onUpvote}
                    onDownvote = {onDownvote}
                    followSubreddit = {followSubreddit}
                    goToSubreddit = {goToSubreddit}
                    />
                ))
                }
            </div>            
        );
    }
}
 
export default Posts;