import React, { useState } from 'react';
//import  ReactDOM from 'react-dom';
import '../css_files/feedback.css';
import { FaStar } from 'react-icons/fa'
import axios from 'axios';
const Feedback =(props) =>{
 
  var feedback={
    name:props.name,
    rating:0
  }
var [rating, setRating]= useState(null);
    const [hover, setHover]= useState(null);
    var [count, setCount] = useState(0);
    
    
    const Rating=(ratingValue)=>{


      console.log(props.name+" "+ratingValue)
      console.log(count)
      
        feedback.rating=ratingValue;
        console.log(feedback)
    axios.post('http://localhost:8087/rating',feedback)
    .then(res=>{
      console.log("posted Successfully"+res)
    })
      
     

    }

    
    return (
    <div style={{marginLeft:'3px', marginRight: '3px'}}>{[...Array(5)].map((star,i) =>{
        const ratingValue = i+1;
        return (<label>
       
        <input type="radio" name="rating" value={ratingValue} 
        onClick={()=> {Rating(ratingValue);setRating(ratingValue)}}
        />
          <FaStar className="star" 
          color={ratingValue <= (hover || rating) ? "#ffc107" :"#ecf0f3"} 
          size={30}
          onMouseEnter={()=> {setHover(ratingValue);setCount(count++)}}
          onMouseLeave={()=> {setHover(null);setCount(count++)}}
          
          />
    </label>)
    } )}</div>

    )

}

export default Feedback