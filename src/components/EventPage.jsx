import React from 'react';
import '../css_files/eventpage.css';
import BootFeedBack from '../Review/BootFeedBack';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class EventPage extends React.Component{

  state={view:0, Feedback:{name:"",email:"",feedback:""},meeting:[],
          speakers:[{name:"Mansi Tripathi",image:"/mansi.png",id:"m"},
                    {id:"p",name:"Prakhar",image:"/sir.png"},
                    {id:"n",name:"Naveen Kumar",image:"/naveensir.png"},
                    {id:"a",name:"Aditya Ranjan",image:"/adityasir.png"}]
                  };

async componentDidMount(){
  const {data:meeting} =await axios.get("http://localhost:8087/meeting");
  axios.get("http://localhost:8087/rating").then(res=>{
    const a=res.data;
    document.getElementById('m').innerHTML="Rating : "+a[0];
    document.getElementById('p').innerHTML="Rating : "+a[1];
    document.getElementById('n').innerHTML="Rating : "+a[2];
    document.getElementById('a').innerHTML="Rating : "+a[3];
        })
  this.setState({meeting})
  console.log(meeting)
  }
  changeView=(view)=>{
    this.setState({view})
}
   changeHandler=(e)=>{
    const {Feedback}=this.state;
    Feedback[e.target.name]=e.target.value;
    this.setState({Feedback})
   }
   handleSubmit= e=>{
    
    const {Feedback}=this.state;

    axios.post("http://localhost:8087/feedback",Feedback).then(res=>{
      console.log(res);
    })
  }
  toggle_visibility=() =>
  {
      var e = document.getElementById('feedback-main');
      if(e.style.display === 'block')
         e.style.display = 'none';
      else
         e.style.display = 'block';
   }
  
    about_us=()=>  {
      var e = document.getElementById('about-main');
      if(e.style.display === 'block')
         e.style.display = 'none';
      else
         e.style.display = 'block';
   }
   joinMeeting=()=>{
     const {meeting}=this.state
     window.location=meeting[meeting.length-1].meeting_link
    
   }

   
downloadFile = () => {
  fetch('http://localhost:8087/download')
    .then(response => {
      try{
      const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    });
  }catch(error){
    document.getElementById('download').innerHTML="No files to download,Speaker will upload the files soon";
    setTimeout(function(){
     document.getElementById('download').innerHTML=""; },4000)
  }
 });
}

render(){
const {meeting,speakers}=this.state;

    return(

        
        <div>


       
<div style={{width:"100%",height:"85px",background:"#22b1ed"}}>

     


<h2 style={{color:"white",display:"inline",position:"relative"}} >  
<img src="/rclogo1.jfif" alt="logo" height="60" width="60" style={{borderRadius:"50%"}} />
<em>RealCoderZ</em></h2>
<h1 style={{color:"white",display:"inline",left:"20%",position:'relative',textAlign:"center",fontSize:"58px",letterSpacing:"1px",fontFamily:"Times New Roman, Times, serif"}}>
<em>Coding BootCamp</em></h1>

</div>





  <div style={{backgroundColor:"white"}} className="maindiv">
   
      <div style={{marginLeft:"2%",width:"96%",height:"500px",backgroundImage:"url('/3.jfif')",backgroundSize:"100% 100%"}}>

      <div style={{position:"absolute",marginLeft:"38%",marginTop:"4%"}}>

    <p><h2 style={{color: "rgb(4 4 4)",fontFamily:"Times New Roman, Times, serif"}}><strong><em> {meeting.length>0?"Event will start at "+ meeting[meeting.length-1].start_time:"No Event Scheduled Yet!!"}</em></strong></h2></p>
   {meeting.length>0&& <button className="btn btn-danger" style={{marginTop:"0px",marginLeft:"28%",borderRadius:"15%"}} onClick={()=>this.joinMeeting()}><h5 style={{color:"black"}}>Join Us</h5></button>}
</div>

</div>
</div>
<h1 className="speaker">Speaker</h1>






{speakers.map((user,i) => (
      <div className="card-container" key={i}>
      <img src={user.image} alt="speaker" height="300" width="300" />
      <div>
          <button className="btn btn-info" style={{width:"100%"}}><em>{user.name}</em></button>
          </div>
          <div>
          <button className="btn btn-outline-standard" style={{width:"100%"}} id={user.id}></button>
          </div>
   </div>
      ))}

<p style={{textAlign:"center"}}>
<div className="card-container"  >
   <img src="/ravisir.png" alt="speaker" height="300" width="300" />
   <div>
       <button className="btn btn-info" style={{width:"100%"}}><em>Ravi Singh</em> </button>
       </div>
       <div>
       <button className="btn btn-outline-standard" style={{width:"100%"}}>CEO</button>
       </div>
</div></p>

<div>

  <BootFeedBack/>
</div>


<div className="App-intro">
 <p style={{textAlign:"center"}}><h3>Download  files as discussed in the meeting</h3>
 <p id="download"></p>
 <button className="btn btn-warning" onClick={this.downloadFile}>Download</button></p>
</div>
  
<div id="feedback-main" style={{marginTop:"5%"}}>
<h2 style={{textAlign:"center",marginTop:"3%"}}><em>Please let us know,Your feedback is valuable to us</em></h2>
  <div id="feedback-div">
    <form  class="form" id="feedback-form1" name="form1" enctype="multipart/form-data" onSubmit={this.handleSubmit}>

      <p class="name">
        <input name="name" type="name" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" required placeholder="Name" id="feedback-name"  onChange={this.changeHandler}/>
      </p>

      <p class="email">
        <input name="email" type="email" class="validate[required,custom[email]] feedback-input" id="feedback-email" placeholder="Email" required onChange={this.changeHandler} />
      </p>

      <p class="text">
        <textarea name="feedback" type="comment" class="validate[required,length[6,300]] feedback-input" id="feedback-comment" required placeholder="Hey, Please let us know how was your experience in this event" onChange={this.changeHandler}></textarea>
      </p>

      <div class="feedback-submit">
       <input type="submit" value="SEND" id="feedback-button-blue" />
        <div class="feedback-ease"></div>
      </div>
    </form>
  </div>
</div>

<button id="popup" class="feedback-button" onClick={()=>this.toggle_visibility()}>Feedback</button>






<div id="about-main" style={{marginTop:"3%"}}>
    <div id="about-div" style={{width:"100%"}} >
        <div className="scrollit">
<img src="/img1.jpg" alt="1"   className="ppt-image"/>
<img src="/img2.jpg" alt="1"   className="ppt-image"/>
<img src="/img3.jpg" alt="1"   className="ppt-image"/>
<img src="/img4.jpg" alt="1"   className="ppt-image"/>
<img src="/img5.jpg" alt="1"   className="ppt-image"/>
<img src="/img6.jpg" alt="1"   className="ppt-image"/>
<img src="/img7.jpg" alt="1"   className="ppt-image"/>
<img src="/img8.jpg" alt="1"   className="ppt-image"/>
<img src="/img9.jpg" alt="1"   className="ppt-image"/>
<img src="/img10.jpg" alt="1"   className="ppt-image"/>
<img src="/img11.jpg" alt="1"   className="ppt-image"/>
<img src="/img12.jpg" alt="1"   className="ppt-image"/>
</div>

    </div>
</div>
<button id="popup" class="about-button" onClick={()=>this.about_us()}>About us</button>


</div>
            
        
    )
}


}
export default EventPage;