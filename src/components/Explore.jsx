import React, { Component } from 'react';
import Posts from './Posts'
import SubredditLVElement from './SubredditLVElement';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Explore extends Component {

    // Fetch entire recommendation Feed from API here
    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
        // Fetch recommendation feed
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

        // Fetch list of subreddits to recommend
        axios.get("https://my-json-server.typicode.com/typicode/demo/posts",{crossdomain: true})  //Replace with appropriate API URL
        .then(response => {
            console.log(response);
            // Set this.state.listOfSubreddits to the response.
            // this.state.listOfSubreddits = response IN LIST FORMAT like the example of listOfSubreddits
        })
        .catch(error => {
            // Error recovery logic
            console.log(error);
        })
    }



    state = { 

        allPosts: [

            // allPosts refers to an array which should be the response from the API returning recommended posts in the format below.
            // Format - id, title, description, image, votes.
            // Post 1
            {id: 1,title:"Space",description:"A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. The word galaxy is derived from the Greek galaxias, literally 'milky', a reference to the Milky Way.",
             image: "../images/test_image1.jpg", votes: 15, subreddit: "r/space"},
            
            // Post 2 
            {id: 2,title:"Forest",description:"A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function.",
             image: "../images/test_image2.jpg", votes: 34, subreddit: "r/nature"},
            
            {id: 3,title:"Mountains",description:"A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill.",
             image: "../images/test_image3.jpg", votes: 55, subreddit: "r/nature"} 
        ],

        listOfSubreddits: [
            {id:1,name:"hello"},
            {id:2,name:"world"},
            {id:3,name:"reactJS"},
            {id:4,name:"Javascript"},
        ]
    }

    render() { 
        return (
            <React.Fragment> 
                
                <div style={{minheight:"100vh",width:"100%",display:"flex",justifyContent:"space-between"}}>
				
                    <div style={{display:"flex",alignItems:"center", flexDirection:"column", padding:5,width:"300",border:"1px solid black"}}>
                        {
                            this.state.listOfSubreddits.map(subreddit => (
                                <SubredditLVElement key={subreddit.id}
                                goToSubreddit = {this.goToSubreddit}
                                name = {subreddit.name}
                                />
                            ))
                        }
                    </div>

                    <main style={{flexGrow:"1",display:"flex",alignItems:"center", flexDirection:"column", padding:5}}>
                        {/* Center division for posts */}
                        <Posts 
                            allPosts = {this.state.allPosts}
                            onUpvote = {this.handleUpvote}
                            onDownvote = {this.handleDownvote}
                            followSubreddit = {this.followSubreddit}
                            goToSubreddit = {this.goToSubreddit}
                            goToPost = {this.goToPost}
                        />
                    </main>

                </div>

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

        //Send updated value after upvote to DB using axios post
    }

    handleDownvote = currentPost => {
        console.log("Current Post: ",currentPost);
        const allPosts = [...this.state.allPosts];
        const index = allPosts.indexOf(currentPost);
        allPosts[index] = {...currentPost};
        allPosts[index].votes--;
        console.log("Updated votes: ",allPosts[index].votes);
        this.setState({ allPosts })

        //Send updated value after downvote to DB using axios post
    }

    followSubreddit = currentPost => {
        console.log("Current Post: ",currentPost);
        const allPosts = [...this.state.allPosts];
        const index = allPosts.indexOf(currentPost);
        allPosts[index] = {...currentPost};
        const subredditToFollow = allPosts[index].subreddit;
        console.log("User is following subreddit: ",subredditToFollow);

        // send "subredditToFollow" to DB add it to list of subreddits user follows using axios post.
    }

    goToSubreddit = subreddit => {
        console.log("Going to subreddit",subreddit);
        const uri = '/r?'+subreddit;
        this.props.history.push(uri,subreddit);
    }

    goToPost = currentPost => {
        console.log("Going to post",currentPost);
        const id = currentPost.id;
        const sub = currentPost.subreddit;
        const uri = '/r/post/?'+sub+'/'+id;
        this.props.history.push(uri,currentPost);
    }

}
 
export default withRouter(Explore);