import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


class Login extends Component {

    state = { 
        username : '',
        password : ''
    }

    container_style = {display:"flex",alignItems:"center", flexDirection:"column", padding:5}
    title_style = {display:"flex", justifyContent:"center" }
    form_style = {border: "1px solid black",width:400,height:"auto",margin:5,minHeight:400,
    display:"flex", alignItems:"center", flexDirection:"column",padding:40,justifyContent:"space-around"};

    render() { 

        // console.log(this.props.updateLoginState);
        // console.log(this.props.username);
        // console.log(this.props.isLoggedIn);

        return ( 
            <React.Fragment>
                {/* Title of the create post page */}
                <div style={this.title_style}>
                    <h1>Login!</h1>
                </div>

                {/* Main Container */}
                <div style={this.container_style}>
                    {/* Sub Container - Actual form to post*/}
                    <div>
                        <form style={this.form_style} onSubmit={this.loginHandler}>
                            
                            <TextField id="name-text" variant="outlined" label="Username" fullWidth 
                            name="username" value={this.state.username} onChange={(e) => this.handleUsernameChange(e.target.value)} />
                            
                            <TextField id="password-text" variant="outlined" label="Password" fullWidth type="password" 
                            name="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e.target.value)} />
                                              
                            <div className="mt-3">
                                <button type="submit" className="btn btn-lg btn-primary">Login</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    handleUsernameChange(value){
        this.setState({username: value})
    }

    handlePasswordChange(value){
        this.setState({password: value})
    }

    // Submit handler send the form data as a json to the appropriate API.
    loginHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // temporary URL for POST request
        axios.post("https://my-json-server.typicode.com/Dhruvvvx17/API-testing",this.state)
            .then(response => {
                console.log(response)
                // Login Success goto main feed

                // !!!! Below code is only for testing
                if(this.state.username==="admin" && this.state.password==="admin"){
                    // Login Success
                    console.log(this.state.username,"Login Successfull!");
                    this.props.updateLoginState(this.state.username);
                    this.props.history.push('/');
                }
                else{
                    // Login Failed
                    console.log(this.state.username,"Login Failed!");
                }
                // !!!! Above is only for testing

            })
            .catch(error => {
                console.log(error)
                // Login Fail stau on login page
                
                // !!!! Below code is only for testing
                // This will change to response.usernmae and response.password
                if(this.state.username==="admin" && this.state.password==="admin"){
                    // Login Success
                    console.log(this.state.username,"Login Successfull!");
                    // Goto main feed
                    this.props.updateLoginState(this.state.username);
                    this.props.history.push('/');
                }
                else{
                    // Login Failed
                    console.log(this.state.username,"Login Failed!");
                }
                // !!!! Above is only for testing
            })
    }

}
 
export default Login;