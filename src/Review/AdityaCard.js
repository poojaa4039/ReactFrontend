import React from 'react';
import '../css_files/Card.css';
import Feedback from './Feedback';

const AdityaCard = props => {
    return(
        <div className="card text-center">
            <div  style={{marginLeft:'5px', marginRight: '5px', marginTop:'10px'}}>
                <Feedback name="Aditya Ranjan"/>
            </div>

            <div className="overflow"> 
                <h1> Aditya's Session</h1>
            </div>
            <div className="card-body text-dark">
            <h4 style={{fontSize:"22px"}}>  Development Environment  </h4>
            </div>

            

        </div>
    )
}

export default AdityaCard;