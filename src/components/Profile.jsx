import React, { Component } from 'react';
import '../styles/notFound.css'
import profilePic from '../images/profilePic.jpg'
import Posts from './Posts'
import axios from 'axios';


class Profile extends Component {

    // Fetch entire Feed from API here
    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
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
    }


    state = { 
        isLoggedIn: this.props.isLoggedIn,
        username: this.props.username,

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
        ]
    }

    // To reflect immediate changes in props
    componentDidUpdate(prevProps) {
        if(prevProps.username !== this.props.username) {
          this.setState({username: this.props.username});
        }
        if(prevProps.isLoggedIn !== this.props.isLoggedIn) {
          this.setState({isLoggedIn: this.props.isLoggedIn});
        }
    }

    render() { 

        const isLoggedIn = this.state.isLoggedIn;
        const username = this.state.username;

        console.log("____IN PROFILE_____\nUsername:",this.props.username,"\nLogin Status:",this.props.isLoggedIn);

        return (
            <React.Fragment>
                {
                    !isLoggedIn ? 
                    // Show that User has not logged in
                    <div>
                    <h1 className="center-screen">
                            Login to view profile!
                        </h1>
                    </div>
                    :
                    // Show profile on page
                    // Main Container
                    <div style={{minheight:"100vh",width:"100%",display:"flex",justifyContent:"space-between"}}>
                        
                        {/* Left */}
                        <div style={{flexGrow:"1",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                            {/* Image */}
                            <div style={{border:"1px solid black",width:"210px",height:"210px",margin:"10px"}}>
                                <img src={profilePic} alt="profile_pic"/>
                            </div>
                            {/* Name */}
                            <div style={{width:"210px",margin:"10px"}}>
                                <h2 style={{textAlign:"center"}}>
                                    {username}
                                </h2>
                            </div>
                            {/* Karma */}
                            <div style={{width:"210px",margin:"10px"}}>
                                <h4 style={{textAlign:"center"}}>
                                    {/* Put actual Karma points here */}
                                    Karma: 1050
                                </h4>
                            </div>
                            {/* Bio */}
                            <div style={{marginInline:"10px",width:"500px",height:"auto",minHeight:"100px"}}>
                                <p style={{textAlign:"center",margin:"5px",padding:"5px"}}>
                                    {/* Put actual Bio here */}
                                    Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!Let's just predtend this is a really clever bio!
                                </p>
                            </div>
                        </div>
                        
                        {/* Center */}
                        <div style={{flexGrow:"9",display:"flex",flexDirection:"column",alignItems:"center",}}>
                            <div>
                                <h2 style={{marginTop:"10px"}}>{username}'s Posts</h2>
                            </div>
                            <Posts
                                allPosts = {this.state.allPosts}
                                onUpvote = {this.handleUpvote}
                                onDownvote = {this.handleDownvote}
                            />
                        </div>
                        
                    </div>
                }
            </React.Fragment>
        );
    }

    handleUpvote = currentPost => {
        console.log("Current Post: ",currentPost);
        const allPosts = [...this.state.allPosts];
        const index = allPosts.indexOf(currentPost);
        allPosts[index] = {...currentPost};
        allPosts[index].votes++;
        console.log("Updated votes: ",allPosts[index].votes);
        this.setState({ allPosts });

        //Send updated value after upvote to DB
    }

    handleDownvote = currentPost => {
        console.log("Current Post: ",currentPost);
        const allPosts = [...this.state.allPosts];
        const index = allPosts.indexOf(currentPost);
        allPosts[index] = {...currentPost};
        allPosts[index].votes--;
        console.log("Updated votes: ",allPosts[index].votes);
        this.setState({ allPosts })

        //Send updated value after downvote to DB
    }


}
 
export default Profile;