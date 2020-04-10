import React, { Component } from 'react';
import 'typeface-roboto'
import NavBar from './components/NavBar';
import MainFeed from './components/MainFeed';
import Trending from './components/Trending';
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

import {BrowserRouter, Switch,Route} from 'react-router-dom';

//App First react module. Contains the NavBar and MainFeed module in it which further contains the navbar and posts.
class App extends Component {
	state = {  }
	render() { 
		return (
			<React.Fragment>
				<BrowserRouter>
					<NavBar/>
					<Switch>
						<Route path="/" exact component={MainFeed}/>
						<Route path="/Trending/" exact component={Trending}/>
						<Route path="/CreatePost/" exact component={CreatePost}/>
						<Route path="/Profile/" exact component={Profile}/>
						<Route component={NotFound}/>
					</Switch>			
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
