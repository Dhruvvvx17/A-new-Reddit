import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Form } from 'react-bootstrap';

class CreatePost extends Component {
    state = {  }

    container_style = {display:"flex",alignItems:"center", flexDirection:"column", padding:5}
    sub_container_style = {border: "1px solid black",width:600,height:"auto",margin:5,minHeight:600,
    display:"flex", alignItems:"center", flexDirection:"column",padding:40,justifyContent:"space-around"};
    title_style = {display:"flex", justifyContent:"center" }

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
                    <div style={this.sub_container_style}>
                        <TextField id="outlined-basic" variant="outlined" label="Title" fullWidth/>
                        <TextField id="outlined-multiline-flexible" variant="outlined" label="Description" fullWidth multiline rowsMax="4" rows="3"/>
                        <Form.File id="custom-file" label="Upload an image or video" custom />
                        <div class="mt-3">
                            <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CreatePost;