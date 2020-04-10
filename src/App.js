import React, { Component } from 'react';
import 'typeface-roboto'
import MainFeed from './components/MainFeed';


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
