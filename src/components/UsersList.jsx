import React from 'react';
import axios from 'axios';
class UsersList extends React.Component{

    constructor(props) {
        super(props)
this.state={
    data:[]
}
    }
 componentDidMount=async ()=>{
    try{
  const {data}= await axios.get("http://localhost:8087/userlist")
  this.setState({data})
    }
    catch(er){
        console.log(er)
    }
}
   
  render(){
    return(
       
        <div>
 
   
   
   

   <p style={{position:"relative",left:"8%"}}><div id="b">

  { this.state.data.length>0?<table className="table text-center m-3 table-striped" style={{width:"80%"}}>
       <thead>
       <tr>
         <th scope="col">Name</th>
         <th scope="col">Email</th>
         <th scope="col">Contact</th>
         </tr>
         </thead>
        
         <tbody >
       {this.state.data.map((data,i)=>(
           <tr key={i}><td>{data.userName}</td><td>{data.email}</td><td>{data.contact}</td></tr>
       )
   
        ) }
       </tbody>
       </table>:<div className="table text-center m-3" style={{width:"70%"}}><h4><em>No Candidate Logged in Yet!!!!</em></h4></div>}
       
   </div></p>
   </div>

    )
}
}


export default UsersList;