import axios from 'axios';

import React from 'react';
import '../css_files/email.css';
export default class EmailForm extends React.Component{

state={
  email:{subject:"",msgBody:""}
}


  handleSend=async(e)=>{
    e.preventDefault();
    try{
    const response=await axios.post('http://localhost:8087/send',this.state.email)
    console.log(response)
if(response.status==200){
document.getElementById('msg').innerHTML="Email sent successfully!!!"
}
        else{
          document.getElementById('msg').innerHTML="Unable to send email!!!"
   
      }
  }catch(error){
    document.getElementById('msg').innerHTML="Network issue!!!"
      
  }
  setTimeout(function(){document.getElementById('msg').innerHTML=""},3000)
    } 

handleChange=(e)=>{
const {email}=this.state
email[e.target.name]=e.target.value;
this.setState({email})
}

render(){
  const {email}=this.state;
  
    return( 
      
      <>
       <h4 className=" text-dark" id="msg" style={{left:"33%",position:"relative"}}></h4><br/>
      
      <div id="emailform" className="container" >
<form onSubmit={this.handleSend}>
         <div className = "form-group" style={{ marginBottom: 30}}>
            <label>Email Subject</label>
               <input id="subject" type = "text" className = "form-control" name="subject" value={email.subject} onChange={this.handleChange}/>
         </div>
         <div className = "form-group">
            <label>Email Content</label>
            <textarea id="msgbody" className = "form-control" rows = "8" name="msgBody" value={email.msgBody} onChange={this.handleChange}></textarea>
         </div>
   
        
        <div id="button" className="row1">
    <button>Send</button>
  </div></form>
      </div></>)
}

}