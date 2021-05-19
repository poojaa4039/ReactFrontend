import React from 'react';
import axios from 'axios';
class ScheduleMeeting extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            message:"",
            meeting:{ start_time: '',
             end_time: '',
             date: '',
             meeting_link:''}
        }

    }

    scheduleMeeting =async (e) => {
        e.preventDefault();
        const {meeting}= this.state;
        const regex=meeting.date&&meeting.start_time&&meeting.end_time&&meeting.meeting_link
        try{
           if(!regex){
              this.setState({message:"Please Fill all the input fields!!!"})
             
            }
              else{
                   const {data}= await axios.post('http://localhost:8087/schedulemeeting',meeting);
                   this.setState({message:data})
             }     
           }
           catch(error){
            this.setState({message:"Network issue, unable to schedule event!!!"})
            
            }
            setTimeout(function(){
                document.getElementById("msg").innerHTML=""},2000)  
    }
    
    handleChange= (e) => {
            const {meeting} =this.state;
            meeting[e.currentTarget.name]=e.currentTarget.value
            this.setState({meeting});
    }

    render(){
        const {meeting,message}=this.state
        return(
            <div> 
                <h4 className="text-dark text-center" id="msg">{message}</h4>
           <p style={{position:"fixed",left:"35%",width:"100%"}}> <div className = "card col-5" style={{background:"#61aec5"}}>
                               
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group mt-3">
                                            Event Date:
                                            <input type="date" name="date" className="form-control" 
                                                value={meeting.date}  required  onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group mt-3">
                                          Event Start Time:
                                            <input name="start_time" className="form-control" type="time"
                                                value={meeting.start_time} onChange={this.handleChange} required />
                                        </div>
                                        <div className = "form-group mt-3">
                                        Event End Time:
                                            <input name="end_time" className="form-control" type="time"
                                                value={meeting.end_time} onChange={this.handleChange} required/>
                                        </div>
                                        <div className = "form-group mt-3">
                                        Event Link :
                                            <input name="meeting_link" className="form-control" 
                                                value={meeting.meeting_link} onChange={this.handleChange} required/>
                                        </div>
<br/>
                                        <button className="btn btn-warning" onClick={this.scheduleMeeting}>Schedule</button>
                                       
                                    </form>
                                </div>
                            </div>
                            </p>
                            </div>
        )
    }
}
export default ScheduleMeeting;