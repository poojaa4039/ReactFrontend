import React from 'react';
import axios from 'axios';
import '../css_files/login.css';
import GoogleLogin from 'react-google-login';



function Login() {
const user={
     userName:"",
     email:""
 }
 const email={
     email:""
 }

    const changeHandler=(e)=>{
        user[e.target.name]=e.target.value
        
    }

    const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(user.userName+" "+user.email);



     axios.post('http://localhost:8087/loginUser', user  )
     .then(res=>{
       console.log(res)
        if(res.data==="success")
        {
            window.location="/eventpage"
        }
        else{
            
            document.getElementById('success').innerHTML=res.data;
            setTimeout(function(){
                document.getElementById("success").innerHTML="";},4000)
            
            }

     })
   

    }
  
     
     const responseGoogle=(response)=>{
           
            console.log(response.profileObj)
            var Email=response.profileObj.email;
            email.email=Email;
            console.log({email})

            axios.post('http://localhost:8087/email', email)
            .then(res=>{
               
                if(res.data==="success")
                {
                    window.location="/eventpage"
                   
                }
                else{
                document.getElementById('success').innerHTML=res.data;
                setTimeout(function(){
                    document.getElementById("success").innerHTML="";},4000)
                
                }
        
             })

        }
        
       
        const  meetingDetails=()=>{
            try{
        axios.get("http://localhost:8087/meeting").then(res=>{
            
            if(res.data.length>0){
                    document.getElementById('meetingdate').innerHTML= "Join us on "  +res.data[res.data.length-1].date;
            }
            else
            document.getElementById('meetingdate').innerHTML= "No Event Available!!!";
        })
        }catch(error){
            document.getElementById('meetingdate').innerHTML="";
        }
        }


    return(
        
<div>

    <div style={{width:"100%",height:"60px",background:"#22b1ed"}}>

     <h2 style={{color:"white"}}>   <img src="/rclogo1.jfif" alt="logo" height="60" width="60" style={{borderRadius:"50%"}} /> <em>RealCoderZ</em></h2>
    </div>
<div className="body" style={{textAlign:"center"}}>
<div className="coding">
<h1 style={{fontSize:"68px"}}><em>CODING BOOTCAMP </em></h1>
<h3 style={{fontSize:"38px"}} id="meetingdate"><em>{meetingDetails()}</em></h3>
</div>


<div className="login-box" >

<div className="title"> <em>Login</em>
<p id="success" style={{fontSize:"14px"}}></p>
</div>

<div className="input-box">
<form onSubmit={handleSubmit}>
<div className="username">
    

    <input type="text" name="userName"  placeholder="Name"  onChange={changeHandler} />
</div>

<div className="contact" >
    

    <input type="email" name="email"  placeholder="Email"    onChange={changeHandler}/>
</div>


<div>
<button className="signin-btn btn btn-outline-info" type="submit"><strong><em>Sign In</em></strong></button>
</div>
</form>
</div>
<div style={{marginTop: "15px"}}>

{/*<button style={{background:"none",width: "100%",border:"3px solid lightblue",fontSize: "22px"}} ><img src="/icon.png" alt="icon" height="48"  width="48" style={{float: "left"}} /><h3 style={{marginTop: "7px"}}>Login with Google</h3></button>*/}

<GoogleLogin 
clientId="618617721551-pr9da8ve8kogd364tgbqbm6228uqu08f.apps.googleusercontent.com"

render={renderProps => (
    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{background:"none",width: "100%",border:"3px solid lightblue",fontSize: "22px"}} ><img src="/icon.png" alt="icon" height="48"  width="48" style={{float: "left"}} /><h3 style={{marginTop: "7px"}}>Login with Google</h3></button>
)}

 
onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy={'single_host_origin'} />


</div>


</div>
</div>
</div>
    );
}

export default Login;