import React, { Component } from 'react';
import axios from 'axios';
import UserElement from './UserElement';
import SubredditElement from './SubredditElement';


class SearchResults extends Component {

    componentDidUpdate(prevProps) {
        if(prevProps.location.state !== this.props.location.state) {
            this.setState({query: this.props.location.state});
        }
    }

    state = {
        query: this.props.location.state,
        // searchResults_users : '',               // for the users obtained after search results
        // searchResults_subreddits : ''           // for the subreddits obtained after search results

        // Example of search results - 
        searchResults_users : [
            {id: 1, username: "User-1", karma: 400, bio: "Hello world", image: "temp1.jpg"},
            {id: 2, username: "User-2", karma: 750, bio: "I am user-2", image: "temp2.jpg"},
            {id: 3, username: "User-3", karma: 1150, bio: "I am user-3", image: "temp3.jpg"},
            {id: 4, username: "User-4", karma: 20, bio: "I am user-4", image: "temp4.jpg"},
        ],

        searchResults_subreddits : [
            {id: 1, subredditName:"r/hello" , title: "Subreddit-1", description: "Hello world", image: "temp1.jpg"},
            {id: 2, subredditName:"r/world" , title: "Subreddit-2", description: "I am subreddit-2", image: "temp2.jpg"},
            {id: 3, subredditName:"r/pics" , title: "Subreddit-3", description: "I am subreddit-3", image: "temp3.jpg"}
        ]

    }

    // Fetch entire Feed from API here
    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
        // Fetch Users
        axios.get("https://get_result_api_here?"+this.props.location.state,{crossdomain: true})  //Replace with appropriate API URL
            .then(response => {
                console.log(response);
                // Set this.state.searchResults_users to the response.
                // this.state.searchResults_users = response IN LIST FORMAT
            })
            .catch(error => {
                // Error recovery logic
                console.log(error);
        })

        // Fetch Subreddits
        axios.get("https://get_result_api_here?"+this.props.location.state,{crossdomain: true})  //Replace with appropriate API URL
            .then(response => {
                console.log(response);
                // Set this.state.searchResults_subreddits to the response.
                // this.state.searchResults_subreddits = response IN LIST FORMAT
            })
            .catch(error => {
                // Error recovery logic
                console.log(error);
        })
    }


    render() { 

        const q = this.state.query;
        console.log("Query received: ",q);
        const searchResults_users = this.state.searchResults_users;
        const searchResults_subreddits = this.state.searchResults_subreddits;

        return (
            <React.Fragment>
                <div style={{height:"auto",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-start"}}>
                    <div style={{margin:"20px"}}>
                        <h2>Search Results for {q} :</h2>
                    </div>
                    <div style={{margin:"20px",marginTop:"30px"}}>
                        <span><h3>Users</h3></span>
                        {/* List of Users */}
                        <div style={{display:"flex",height:"auto",minheight:"200px",flexWrap:"wrap",justifyContent:"left"}}>

                            {searchResults_users.map(user => (
                                <UserElement key={user.id}
                                    user = {user}
                                    />
                                ))
                            }
                            
                        </div>
                    </div>
                    <div style={{margin:"20px",marginTop:"30px"}}>
                        <span><h3>Subreddits</h3></span>
                        {/* List of Subreddits */}
                        <div style={{display:"flex",height:"auto",minheight:"200px",flexWrap:"wrap",justifyContent:"left"}}>

                            {searchResults_subreddits.map(subreddit => (
                                <SubredditElement key={subreddit.id}
                                subreddit = {subreddit}
                                goToSubreddit = {this.goToSubreddit}
                                />
                               ))
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    goToSubreddit = subreddit => {
        console.log("Going to subreddit",subreddit);
        const uri = '/r?'+subreddit;
        this.props.history.push(uri,subreddit);
    }

}
 
export default SearchResults;