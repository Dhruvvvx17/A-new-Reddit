import React, { Component } from 'react';
import { IconButton } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddIcon from '@material-ui/icons/Add';
import PostDescription from './PostDescription'


class ViewPost extends Component {


    state = { 
        // The post data is send from the onclick in main feed
        post: this.props.location.state
    }

    container_style = {border: "1px solid black",width:600,height:"auto",margin:5,minHeight:600};
    title_votes_style = {paddingInline: 10,display:"flex",flexDirection:"row",justifyContent:"space-between"}
    vote_btn_style = {marginInline:10,marginTop:5,marginBottom:5}
    subreddit_name_style = {paddingInline: 10,display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"5px"}

    render() { 
        return (
            <React.Fragment>
                <div style={{minheight:"100vh",width:"100%",display:"flex",justifyContent:"center"}}>
                    <div style={this.container_style}>
                    
                        <div style={this.subreddit_name_style}>
                            {/* Subreddit Name */}
                            <div style={{fontSize:15}} onClick={ () => this.goToSubreddit(this.state.post.subreddit)}>
                                <p style={{marginTop:"5px"}}> { this.state.post.subreddit } </p>
                            </div>
                            {/* Follow Button */}
                            <div>
                            <IconButton size = "small" color="primary" onClick={ () => this.followSubreddit(this.state.post)} >
                                <AddIcon/>
                            </IconButton>
                            </div>
                        </div>
                    
                        {/* Post Title & Votes */}
                        <div style={this.title_votes_style}>
                            {/* Title */}
                            <div style={{fontSize:25,fontWeight:"bold"}}>
                                <p> { this.state.post.title } </p>
                            </div>
                            {/* Votes */}
                            <div>
                                <p style={{fontSize:25}} className="text-warning"> { this.state.post.votes } </p>
                            </div>
                        </div>

                        {/* Post Text/Description/Caption */}
                        <div style={{paddingInline: 10}}>                    
                            <PostDescription desc = {this.state.post.description} />
                        </div>
                        
                        {/* Post image */}
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <img src = {this.state.post.image} alt="space" style={{width:"80%",height:"80%"}}/>
                        </div>

                        {/* Post upvote and downvote button */}
                        <div style={this.vote_btn_style}>
                            <IconButton size = "small" color="secondary" onClick={ () => this.handleUpvote(this.state.post)} >
                                <ArrowUpwardIcon/>
                            </IconButton>
                            <IconButton size = "small" color="primary" onClick={ () => this.handleDownvote(this.state.post)}>
                                <ArrowDownwardIcon/>
                            </IconButton>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }

    handleUpvote = currentPost => {
        console.log("Current Post: ",currentPost);
        const post = {...currentPost}
        post.votes++;
        console.log("Updated votes: ",post.votes);
        this.setState({ post });

        //Send updated value after upvote to DB using axios post
    }

    handleDownvote = currentPost => {
        console.log("Current Post: ",currentPost);
        const post = {...currentPost}
        post.votes++;
        console.log("Updated votes: ",post.votes);
        this.setState({ post });

        //Send updated value after downvote to DB using axios post
    }

    followSubreddit = currentPost => {
        console.log("Current Post: ",currentPost);
        const post = {...currentPost}
        const subredditToFollow = post.subreddit;
        console.log("User is following subreddit: ",subredditToFollow);

        // send "subredditToFollow" to DB add it to list of subreddits user follows using axios post.
    }

    goToSubreddit = subreddit => {
        console.log("Going to subreddit",subreddit);
        const uri = '/r?'+subreddit;
        this.props.history.push(uri,subreddit);
    }




}
 
export default ViewPost;