import React from 'react';
import  '../css_files/homepage.css';

import { Link } from 'react-router-dom';
class HomePage extends React.Component
{
render(){
    return(
        
<div> 
<div className="header1">
		<div className="welcome1" ><h3 style={{color:"white"}}><img src="/rclogo1.jfif" height="60" width="60" alt="logo" style={{float:"left",borderRadius:"50%"}} /><strong><em>Welcome to RealCoderZ</em></strong> </h3>
 <h5 style={{color:"white"}}><strong><i>Project ready on day1</i></strong></h5>
		</div>
</div>
<div className="after-header">
<div className ="title-heading1">
	<h2>Upcoming Event</h2>
	<p> Learn Latest Technologies</p>
</div>
<div className="section1">
	<img src="/rcimage.jfif" alt="eventimage" />
	<div>
		<h1><strong><em>Coding Bootcamp</em></strong><Link to="/register" className="atag" ><i>Pre-Register</i></Link></h1>
		
</div>
	</div>
	</div> 
    
        </div>
    );
}
}
export default HomePage;