import React from 'react';
import axios from 'axios';

class UploadFiles extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedFile: null,
            message:""
        }
    }

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
        };
      
     
      onFileUpload =async () => {
          const formData = new FormData();
         try{
          formData.append( "document", this.state.selectedFile,this.state.selectedFile.name);
         console.log("file choosen!!!")
         await axios.post("http://localhost:8087/upload", formData);
     this.setState({message:"File uploaded successfully!!!!"})
     setTimeout(function(){document.getElementById('msg').innerHTML=""},2000)
          }
          catch(error){
            document.getElementById('msg').innerHTML="No File Choosen!!!!"
              setTimeout(function(){ document.getElementById('msg').innerHTML=""},2000)
          }
      };

      fileData = () => {
    
        if (this.state.selectedFile) {
           
          return (
            <div><br/>
              <h5><b>File Details:</b></h5>  <hr/>          
              <p>File Name: {this.state.selectedFile.name}</p>
              <p>File Type: {this.state.selectedFile.type}</p>
              <p> Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()} </p>
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h6><b>Choose before pressing the upload button</b></h6>
            </div>
          );
        }
      };

    render(){
        const {message}=this.state
        return(
<div>
<h4 className=" text-dark" id="msg" style={{left:"35%",position:"relative"}}>{message}</h4>
<p style={{position:"fixed",width:"100%",left:"37%"}}> <div className = "col-4" style={{boxShadow: "10px 10px 30px",height:"300px",borderRadius:"10px",background:"#61aec5", padding:"10px 10px 10px"}}>
                                <input  type="file" onChange={this.onFileChange} className="mt-3"/>
                                <button className="btn btn-warning" onClick={this.onFileUpload}> Upload!</button>
                          {this.fileData()}  </div></p>

                          </div>
        )
    }
}
export default UploadFiles;