import React, { Component } from 'react';
import profilePic from '../images/subredditPic.jpg'
import axios from 'axios';
import Posts from './Posts'


class Subreddit extends Component {
    
    // Fetch entire Feed from API here
    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){

        // Get Subreddits posts
        axios.get("https://my-json-server.typicode.com/typicode/demo/posts",{crossdomain: true})  //Replace with appropriate API URL
            .then(response => {
                console.log(response);
                // Set this.state.allPosts to the response.
                // this.state.allPosts = response IN LIST FORMAT like the example of allPosts
            })
            .catch(error => {
                // Error recovery logic
                console.log(error);
            })

        // Get Subreddit's profile information
        axios.get("https://my-json-server.typicode.com/typicode/demo/posts",{crossdomain: true})  //Replace with appropriate API URL
        .then(response => {
            console.log(response);
            // Set this.state.subredditProfile to the response.
            // this.state.subredditProfile = response IN DICT FORMAT like the example of subredditProfile
        })
        .catch(error => {
            // Error recovery logic
            console.log(error);
        })
    }


    state = {
        // Fetch all posts required by user
        allPosts: [

            // allPosts refers to an array which should be the response from the API returning all posts in the format below.
            // Format - id, title, description, image, votes.
            // Post 1
            {id: 1,title:"Space",description:"A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. The word galaxy is derived from the Greek galaxias, literally 'milky', a reference to the Milky Way.",
                image: "../images/test_image1.jpg", votes: 15},
            
            // Post 2 
            {id: 2,title:"Forest",description:"A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function.",
                image: "../images/test_image2.jpg", votes: 34},
            
            {id: 3,title:"Mountains",description:"A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill.",
                image: "../images/test_image3.jpg", votes: 55} 
        ],

        subRedditProfile : {name:"r/all", profilePic:"temp1.jpg", title:"subreddit about everything",
        description:"This is the description,This is the description,This is the description,This is the description.",
        rules:"Rules,Rules,Rules,Rules,Rules,Rules,Rules,Rules,Rules,Rules,Rules"}

    }
    
    render() { 
        return (
            <React.Fragment>
                {/*  Main Container */}
                <div style={{minheight:"100vh",width:"100%",display:"flex",justifyContent:"space-between"}}>
                    
                    {/* Left */}
                    <div style={{flexGrow:"1",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                        {/* Image */}
                        <div style={{border:"1px solid black",width:"210px",height:"210px",margin:"10px"}}>
                            <img src={profilePic} style={{width:"210px",height:"210px"}} alt="profile_pic"/>
                        </div>
                        {/* Name */}
                        <div style={{width:"300px",margin:"10px"}}>
                            <h2 style={{textAlign:"center"}}>
                                {this.state.subRedditProfile.name}
                            </h2>
                        </div>
                        {/* Karma */}
                        <div style={{width:"300px",margin:"10px"}}>
                            <h4 style={{textAlign:"center"}}>
                                {/* Put actual Karma points here */}
                                {this.state.subRedditProfile.title}
                            </h4>
                        </div>
                        {/* Description */}
                        <div style={{marginInline:"10px",width:"500px",height:"auto",minHeight:"100px"}}>
                            <p style={{textAlign:"center",margin:"5px",padding:"5px"}}>
                                {/* Put actual Description here */}
                                {this.state.subRedditProfile.description}
                            </p>
                        </div>
                        {/* Rules */}
                        <div style={{marginInline:"10px",width:"500px",height:"auto",minHeight:"100px"}}>
                            <p style={{textAlign:"center",margin:"5px",padding:"5px"}}>
                                {/* Put actual Description here */}
                                {this.state.subRedditProfile.rules}
                            </p>
                        </div>
                    </div>
                    
                    {/* Center */}
                    <div style={{flexGrow:"9",display:"flex",flexDirection:"column",alignItems:"center",}}>
                        <div>
                            <h2 style={{marginTop:"10px"}}>All posts on {this.state.subRedditProfile.name}</h2>
                        </div>
                        <Posts
                            allPosts = {this.state.allPosts}
                            onUpvote = {this.handleUpvote}
                            onDownvote = {this.handleDownvote}
                        />
                    </div>
                    
                </div>
        </React.Fragment>
        );
    }
}
 
export default Subreddit;