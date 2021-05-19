import React, { Component } from "react";
//import {Spring} from 'react-spring';
import AdityaCard from './AdityaCard';
import PrakharCard from './PrakharCard';
import NaveenCard from './NaveenCard';
import MansiCard from './MansiCard';
import '../css_files/BootFeedBack.css'; 
class BootFeedBack extends Component{

    render(){
        return (
            <div className="container-fluid  ">
  
            <div className="row" >
                <h1 style={{textAlign:"center"}}>Review our Speakers after the session</h1>
            <div className="col-md-3" id="1">
                <PrakharCard/>
            </div> 
            <div className="col-md-3" id="2">
                <NaveenCard/>
            </div>
            <div className="col-md-3" id="3">
                <AdityaCard/>
            </div>
            <div className="col-md-3" id="4">
                <MansiCard/>
            </div>
            </div>

            </div>
        )
    }
}
export default BootFeedBack;