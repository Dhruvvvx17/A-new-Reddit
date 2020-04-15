import React, { Component } from 'react';
import { IconButton } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddIcon from '@material-ui/icons/Add';
import PostDescription from './PostDescription'
import '../styles/post.css'
// Every post is assembled here. Called using the map function repetedly for every post that is to be displayed.
class Post extends Component {
    state = {  }

    // Styling elements
    container_style = {border: "1px solid black",width:400,height:"auto",margin:5,minHeight:400};
    title_votes_style = {paddingInline: 10,display:"flex",flexDirection:"row",justifyContent:"space-between"}
    vote_btn_style = {marginInline:10,marginTop:5,marginBottom:5}
    subreddit_name_style = {paddingInline: 10,display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"5px"}

    render() { 

        const {id,title,description,image,votes,subreddit} = this.props.post;

        console.log(id);    //postID

        return (  
                // Single post container
                <div style={this.container_style}>
                    
                    <div style={this.subreddit_name_style}>
                        {/* Subreddit Name */}
                        <div style={{fontSize:15}} onClick={ () => this.props.goToSubreddit(subreddit)}>
                            <p style={{marginTop:"5px"}}> { subreddit } </p>
                        </div>

                        {/* Follow Button */}
                        <div>
                        <IconButton size = "small" color="primary" onClick={ () => this.props.followSubreddit(this.props.post)} >
                            <AddIcon/>
                        </IconButton>
                        </div>
                    </div>

                    {/* Post Title & Votes */}
                    <div style={this.title_votes_style}>
                        {/* Title */}
                        <div style={{fontSize:25,fontWeight:"bold"}} onClick={ () => this.props.goToPost(this.props.post)}>
                            <p> { title } </p>
                        </div>
                        {/* Votes */}
                        <div>
                            <p style={{fontSize:25}} className="text-warning"> { votes } </p>
                        </div>
                    </div>

                    {/* Post Text/Description/Caption */}
                    <div style={{paddingInline: 10}} onClick={ () => this.props.goToPost(this.props.post)}>                    
                        <PostDescription desc = {description} />
                    </div>
                    
                    {/* Post image */}
                    <div style={{display:"flex",justifyContent:"center"}} onClick={ () => this.props.goToPost(this.props.post)}>
                        <img src = {image} alt="space" style={{width:"80%",height:"80%"}}/>
                    </div>

                    {/* Post upvote and downvote button */}
                    <div style={this.vote_btn_style}>
                        <IconButton size = "small" color="secondary" onClick={ () => this.props.onUpvote(this.props.post)} >
                            <ArrowUpwardIcon/>
                        </IconButton>
                        <IconButton size = "small" color="primary" onClick={ () => this.props.onDownvote(this.props.post)}>
                            <ArrowDownwardIcon/>
                        </IconButton>
                    </div>
                </div>
        );
    }
}
 
export default Post;