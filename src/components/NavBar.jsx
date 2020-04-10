import React, { Component } from 'react';

class NavBar extends Component {
    state = { 
        query : ""
    };

    render() {  

        return ( 
            <nav className="navbar navbar-dark bg-dark" style={{color: "#FFFFFF"}}>

                {/* Title */}
                <a className="navbar-brand text-warning" href="https://www.google.com">A New Reddit</a>

                <ul className="nav justify-content-end">
                    {/* First hyperlink */}
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="https://www.google.com">Home</a>
                    </li>

                    {/* Second Hyperlink */}
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="https://www.google.com">Trending</a>
                    </li>

                    {/* Third Hyperlink */}
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="https://www.google.com">Create Post</a>
                    </li>

                    {/* Fourth Hyperlink */}
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="https://www.google.com">Profile</a>
                    </li>

                    {/* Search bar and submit button as a form */}
                    <li>
                        <form className="form-inline">
                        
                        <input className="form-control mr-sm-2" type="text"  value = {this.state.query} placeholder="Search" aria-label="Search"
                            onChange = {(e) => this.handleChange(e.target.value)} />

                        <input type="button" value="Search" onClick={() => this.searchQuery()} className="btn btn-outline-warning my-2 my-sm-0"/>
                        </form>
                    </li>

                </ul> 
            </nav>
        );
    }

    handleChange(value){
        this.setState({query: value});
    }


    searchQuery(){
        const sendQuery = this.state.query;
        console.log("Query to search is: ",sendQuery);
        // Hit API with search result
    }

}
 
export default NavBar;