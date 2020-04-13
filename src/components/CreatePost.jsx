import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Form } from 'react-bootstrap';
import axios from 'axios';
class CreatePost extends Component {

    
    state = {
            title : "",
            description : "",
            image : "",
            votes : 0
    };
    

    container_style = {display:"flex",alignItems:"center", flexDirection:"column", padding:5}
    title_style = {display:"flex", justifyContent:"center" }
    form_style = {border: "1px solid black",width:600,height:"auto",margin:5,minHeight:600,
    display:"flex", alignItems:"center", flexDirection:"column",padding:40,justifyContent:"space-around"};

    render() { 

        return (
            <React.Fragment>
                {/* Title of the create post page */}
                <div style={this.title_style}>
                    <h1>What are you thinking about?</h1>
                </div>

                {/* Main Container */}
                <div style={this.container_style}>
                    {/* Sub Container - Actual form to post*/}
                    <div>
                        <form style={this.form_style} onSubmit={this.submitHandler}>
                            
                            <TextField id="name-text" variant="outlined" label="Title" fullWidth 
                            name="post_title" value={this.state.title} onChange={(e) => this.handleTitleChange(e.target.value)} required/>
                            
                            <TextField id="multiline-description-text" variant="outlined" label="Description" fullWidth multiline 
                            rowsMax="4" rows="3" name="post_description" value={this.state.description} onChange={(e) => this.handleDescriptionChange(e.target.value)} />
                            
                            <Form.File id="custom-file" label="Upload an image" custom value={this.state.image} 
                            name="post_image" onChange={(e) => this.handleImageChange(e.target.value)}/>
                            
                            <div className="mt-3">
                                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    handleTitleChange(value){
        this.setState({title: value})
    }

    handleDescriptionChange(value){
        this.setState({description: value})
    }

    handleImageChange(value){
        this.setState({image: value})
    }

    // Submit handler send the form data as a json to the appropriate API.
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // temporary URL for POST request
        axios.post("https://my-json-server.typicode.com/Dhruvvvx17/API-testing",this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

            // Go to the post which has been uploaded 
            // Or change the view in some way as the post has been created. 
    }


}
 
export default CreatePost;