import React, { Component } from 'react';
import 'typeface-roboto'
import MainFeed from './components/MainFeed';

//App First react module. Contains the MainFeed module in it which further contains the navbar and posts.

class App extends Component {
	state = {  }
	render() { 
		return (
			<React.Fragment>
				<MainFeed/>
			</React.Fragment>
		);
	}
}

export default App;
