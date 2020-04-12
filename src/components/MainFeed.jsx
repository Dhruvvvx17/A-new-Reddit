import React, { Component } from 'react';
import Posts from './Posts'
import axios from 'axios';

// MainFeed module contains <Posts>. Each post in posts is loaded further from the <Post> module.
class MainFeed extends Component {
    
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
    };

    render() { 
        return ( 
            <React.Fragment>
				<main style={{display:"flex",alignItems:"center", flexDirection:"column", padding:5}}>
                    <Posts 
                        allPosts = {this.state.allPosts}
                        onUpvote = {this.handleUpvote}
                        onDownvote = {this.handleDownvote}
                    />
				</main>
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
 
export default MainFeed;