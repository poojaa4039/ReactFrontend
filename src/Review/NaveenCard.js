import React from 'react';
import '../css_files/Card.css';
import Feedback from './Feedback';

const NaveenCard = props => {
    return(
        <div className="card text-center">
            <div  style={{marginLeft:'5px', marginRight: '5px', marginTop:'10px'}}>
                <Feedback name="Naveen Kumar"/>
            </div>

            <div className="overflow"> 
                <h1> Naveen's Session</h1>
            </div>
            <div className="card-body text-dark">
            <h4>  Java Concepts </h4>
            </div>

           

        </div>
    )
}

export default NaveenCard;