
import React from 'react'
import '../css_files/admin_navbar.css'
import '../css_files/admin_sidebar.css';
import 'font-awesome/css/font-awesome.min.css';
import EditAdminProfile from './EditAdminProfile'
import ShowFeedback from './ShowFeedback';
import ScheduleMeeting from './ScheduleMeeting';
import UsersList from './UsersList';
import UploadFiles from './UploadFiles';
import RegisteredUsers from './RegisteredUsers';
import EmailForm from './SetMailDescription';
export default class Admin extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            view:-1
            }
       
    }
    changeView=(view)=>{
        this.setState({view})
    }
    render(){
        const {view}=this.state
        return (<React.Fragment>
            <div id="wrapper" style={{display:"flex"}}>
            <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <li style={{  height: "4.5rem"}}>
        
            <img src="/logo11.png" style={{verticalAlign: "middle", borderStyle: "none"}}/>
      
      </li> 
      <hr class="sidebar-divider my-0"/> 
      <li class="nav-item active">
        <a class="nav-link">
          <i class="fa fa-fw fa-tachometer-alt"></i> 
          <span class="i"> Dashboard</span></a>
      </li>
      <hr class="sidebar-divider"/>
      <div class="sidebar-heading">
        Features
      </div>

          

      <li class="nav-item">
        <a class="nav-link" onClick={()=>this.changeView(4)}>
        <i class="fa fa-user"></i>
          <span>  Regisered Users</span>
        </a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" onClick={()=>this.changeView(0)}>
       <i class="fa fa-user"></i>
          <span>  LoggedIn Users</span>
        </a>
      </li>

           <li class="nav-item">
        <a class="nav-link"  onClick={()=>this.changeView(2)}>
        <i class="fa fa-calendar"></i>
          <span>  Schedule Meeting</span>
        </a>
      </li> 

                 <li class="nav-item"> 
        <a class="nav-link" onClick={()=>this.changeView(3)}>
         <i class="fa fa-upload"></i>
          <span>  Upload Files</span>
        </a>
      </li>


      <li class="nav-item"> 
        <a class="nav-link" onClick={()=>this.changeView(1)}>
         <i class="fa fa-comments"></i>
          <span>  View Feedback</span>
        </a>
      </li>
      <li class="nav-item"> 
        <a class="nav-link" onClick={()=>this.changeView(5)}>
         <i class="fa fa-paper-plane"></i>
          <span>  Send Mail</span>
        </a>
      </li>

      <hr class="sidebar-divider"/>
    </ul>

<div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <nav class="navbar navbar-expand navbar-light bg-navbar topbar static-top">
                <h5 style={{margin:"350px",color:"#fff"}}><em>WELCOME TO ADMIN SECTION</em></h5>
        </nav>
 

        {view===-1 && <img src='/5.jfif' style={{width:"100%",marginTop:0}} alt="new"/>}
           {view!==-1 && <div><br/><br/></div>}
          
                {view===0 && <UsersList />}  
                           {view===2 && <ScheduleMeeting />}
    
                           {view===3 && <UploadFiles /> }
              
                           { view===1 && <ShowFeedback />}
                           { view===4 && <RegisteredUsers />}
                           { view===5 &&<EmailForm/>}
                           { view===7 &&<EditAdminProfile/>}
                           




 </div>
 </div>
 </div>
    </React.Fragment>
        )
    }
}