import React, { Component } from 'react';
import '../styles/notFound.css'

class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <h1 className="center-screen">
                        404! The Requested Page is not found.
                    </h1>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NotFound;