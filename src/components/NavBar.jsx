import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navLinks.css'

class NavBar extends Component {
    state = { 
        query : "",
        isLoggedIn: false
    };


    render() {  

        const username = this.props.username;

        return ( 
            <nav className="navbar navbar-dark bg-dark" style={{color: "#FFFFFF"}}>

                {/* Title */}
                <NavLink to="/" className="navbar-brand text-warning">
                    A New Reddit   
                </NavLink>
             
                <ul className="nav justify-content-end">

                    {/* Search bar and submit button as a form */}

                    {/* <li>
                        <form className="form-inline">
                        
                        <input className="form-control mr-sm-2" type="text"  value = {this.state.query} placeholder="Search" aria-label="Search"
                            onChange = {(e) => this.handleChange(e.target.value)} />

                        <input type="button" value="Search" onClick={() => this.searchQuery()} className="btn btn-outline-warning my-2 my-sm-0 mx-sm-2"/>
                        </form>
                    </li> */}

                    {/* <li className="my-2 my-sm-0 mx-sm-2">
                        { this.state.isLoggedIn ? 
                        <div>
                            <div style={{marginTop:8}}>Logged In as: {username}</div>
                        </div>
                        :
                        null}    
                    </li>

                    <div>
                        { this.state.isLoggedIn ?
                        <h3>|</h3>
                        :
                        null
                        }
                    </div> */}

                    {/* First hyperlink */}
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-warning" activeClassName="nav-link text-danger" exact>Home</NavLink>
                    </li>

                    {/* Second Hyperlink */}
                    <li className="nav-item">
                        <NavLink to='/Trending' className="nav-link text-warning" activeClassName="nav-link text-danger" exact>Trending</NavLink>
                    </li>

                    {/* Third Hyperlink */}
                    <li className="nav-item">
                        <NavLink to='/CreatePost' className="nav-link text-warning" activeClassName="nav-link text-danger" exact>Create Post</NavLink>
                    </li>

                    {/* Fourth Hyperlink */}
                    <li className="nav-item">
                        <NavLink to='/Profile' className="nav-link text-warning" activeClassName="nav-link text-danger" exact>Profile</NavLink>
                    </li>

                    <div><h3>|</h3></div>

                    <li>
                        <input type="button" value = {!this.state.isLoggedIn ? "Login" : "Logout"} className="btn btn-outline-danger my-2 my-sm-0 mx-sm-2"
                        onClick={(e) => this.loginToggle()}/>
                    </li>
                    <li>
                        { !this.state.isLoggedIn ? 
                            <input type="button" value="Signup" className="btn btn-outline-danger my-2 my-sm-0 mx-sm-1"
                            onClick={(e) => this.handleSignup(e.target.value)}/>    
                        :
                        null
                        }                    
                    </li>
                </ul> 
            </nav>
        );
    }

    handleChange(value){
        this.setState({query: value});
    }

    loginToggle(){

        // Login alert box

        // Show the user status
        if (this.state.isLoggedIn===false){
            this.setState({isLoggedIn: true});
        }
        else{
            this.setState({isLoggedIn: false});
        }
        console.log("Login Status: ",!this.state.isLoggedIn);
    }

    handleSignup(value){
        console.log(value);
    }


    searchQuery(){
        if (this.state.query !== ''){
            const sendQuery = this.state.query;
            console.log("Query to search is: ",sendQuery);
            // Send to API with search result
            // Logic for what to do with the search result comes here.    
        }
    }

}
 
export default NavBar;