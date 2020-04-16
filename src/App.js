import React, { Component } from 'react';
import 'typeface-roboto'
import NavBar from './components/NavBar';
import MainFeed from './components/MainFeed';
import Trending from './components/Trending';
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateSubreddit from './components/CreateSubreddit';
import SearchResults from './components/SearchResults';
import Subreddit from './components/Subreddit';
import ViewPost from './components/ViewPost';
import Explore from './components/Explore';

import {BrowserRouter, Switch,Route} from 'react-router-dom';

//App First react module. Contains the NavBar and MainFeed module in it which further contains the navbar and posts.
class App extends Component {

	state = {
		isLoggedIn:false,
		username:''
	}
	
	render() { 

		return (
			<React.Fragment>
				<BrowserRouter>
					<NavBar
						username={this.state.username}
						isLoggedIn={this.state.isLoggedIn}
						updateLoginState={this.updateLoginState}/>
					<Switch>

						<Route path="/" exact component={MainFeed}/>

						<Route path="/Trending/" exact component={Trending}/>

						<Route path="/CreatePost/" exact 
							render={(props) => <CreatePost {...props}
							username={this.state.username}
							isLoggedIn={this.state.isLoggedIn} /> } />

						<Route path="/Profile/" exact 
							render={(props) => <Profile {...props}
							username={this.state.username}
							isLoggedIn={this.state.isLoggedIn} /> } />

						<Route path="/Login/" exact 
							render={(props) => <Login {...props}
							updateLoginState={this.updateLoginState}
							username={this.state.username}
							isLoggedIn={this.state.isLoggedIn}/> } />

						<Route path='/Signup/' exact component={Signup}/>

						<Route path='/CreateSubreddit' exact
						render={(props) => <CreateSubreddit {...props}
						username={this.state.username}
						isLoggedIn={this.state.isLoggedIn} /> } />

						<Route path='/SearchResults' exact component={SearchResults}/>
						
						<Route path='/r/' exact component={Subreddit}/>
						
						<Route path='/r/post' exact component={ViewPost}/>

						<Route path='/Explore' exact 
						render={(props) => <Explore {...props} 
						username={this.state.username}
						isLoggedIn={this.state.isLoggedIn} /> } />

						<Route component={NotFound}/>

					</Switch>			
				</BrowserRouter>
			</React.Fragment>
		);
	}

	updateLoginState = (currentUser) => {
		const isLoggedIn = this.state.isLoggedIn;
		if(isLoggedIn===false){
			this.setState({isLoggedIn:true})
			this.setState({username:currentUser})
		}
		else{
			this.setState({isLoggedIn:false})
			this.setState({username:''})
		}
		console.log("Login State in App.js:",this.state.username,this.state.isLoggedIn)
	}

}

export default App;
