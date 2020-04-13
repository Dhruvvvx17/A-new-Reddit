import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Signup extends Component {
    
    state = { 
        username:'',
        email:'',
        bio:'',
        password:'',
        profilePic:''
    }

    container_style = {display:"flex",alignItems:"center", flexDirection:"column", padding:5}
    title_style = {display:"flex", justifyContent:"center" }
    form_style = {border: "1px solid black",width:500,height:"auto",margin:5,minHeight:500,
    display:"flex", alignItems:"center", flexDirection:"column",padding:40,justifyContent:"space-around"};


    render() { 
        return ( 
            <React.Fragment>
            {/* Title of the create post page */}
            <div style={this.title_style}>
                <h1>Signup!</h1>
            </div>

            {/* Main Container */}
            <div style={this.container_style}>
                {/* Sub Container - Actual form to post*/}
                <div>
                    <form style={this.form_style} onSubmit={this.signUpHandler}>
                        
                        <TextField id="name-text" variant="outlined" label="Username" fullWidth 
                        name="username" value={this.state.username} onChange={(e) => this.handleUsernameChange(e.target.value)} required/>

                        <TextField id="email-text" variant="outlined" label="Email" fullWidth 
                        name="email" value={this.state.email} onChange={(e) => this.handleEmailChange(e.target.value)} required/>
                        
                        <TextField id="bio-text" variant="outlined" label="Bio" fullWidth 
                        name="bio" value={this.state.bio} onChange={(e) => this.handleBioChange(e.target.value)} />
                        
                        <TextField id="password-text" variant="outlined" label="Password" fullWidth type="password" 
                        name="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e.target.value)} required/>
                                          
                        <div className="mt-3">
                            <button type="submit" className="btn btn-lg btn-primary">Signup</button>
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

    handleEmailChange(value){
        this.setState({email: value})
    }

    handleBioChange(value){
        this.setState({bio: value})
    }

    handlePasswordChange(value){
        this.setState({password: value})
    }


    signUpHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // temporary URL for POST request
        axios.post("https://my-json-server.typicode.com/Dhruvvvx17/API-testing",this.state)
            .then(response => {
                console.log(response)
                // Login Success goto main feed

                // For testing only
                console.log('Login with username: admin password: admin');
                this.props.history.push('/Login');
            })
            .catch(error => {
                console.log(error)
                // Login Fail stau on login page

                // For testing only
                console.log('Login with username: admin password: admin');
                this.props.history.push('/Login');
            })
    }


}
 
export default Signup;