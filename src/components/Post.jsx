import React, { Component } from 'react';
import { IconButton } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PostDescription from './PostDescription'

class Post extends Component {
    state = {  }

    
    // Styling elements
    container_style = {border: "1px solid black",width:400,height:"auto",margin:5,minHeight:400};
    title_votes_style = {paddingInline: 10,display:"flex",flexDirection:"row",justifyContent:"space-between"}
    vote_btn_style = {marginInline:10,marginTop:5,marginBottom:5}

    render() { 

        const {id,title,description,image,votes} = this.props.post;

        console.log(id);    //postID

        return (  
                // Single post container
                <div style={this.container_style}>
                    
                    {/* Post Title & Votes */}
                    <div style={this.title_votes_style}>
                        {/* Title */}
                        <div style={{fontSize:25,fontWeight:"bold"}}>
                            <p> { title } </p>
                        </div>
                        {/* Votes */}
                        <div>
                            <p style={{fontSize:25}} className="text-warning"> { votes } </p>
                        </div>
                    </div>

                    {/* Post Text/Description/Caption */}
                    <div style={{paddingInline: 10}}>                    
                        <PostDescription desc = {description} />
                    </div>
                    
                    {/* Post image */}
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src = {image} alt="fcb" style={{width:"80%",height:"80%"}}/>
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