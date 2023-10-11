import React from "react";
import { useState } from "react";


function Counter() {


const [text , setText]= useState("");
const uppercase = () => {
    console.log('Uppercase button clicked');
    setText(text.toUpperCase());
  };

  const lowercase = () => {
    setText(text.toLowerCase());
  };
    return (
    <div className="counter-container">
        <div className="number-holder">
            <div className="counter-box">
                <p>words</p>
                <p className="count">{text.length>0?text.split(' ').length:null}</p>
            </div>
            <div className="counter-box" >
                <p>letters</p>
                <p className="count">{text.length>0?text.length:null}</p>
            </div>
            <div className="counter-box">
                <p>paragraph</p>
                <p className="count">{text.length>0?text.split(/\r\n|\r|\n/).length:' '}</p>
            </div>
        </div>
        <div className="text-box">
            <textarea className="textarea" placeholder="Enter/Paste your text here" value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}></textarea>
        </div>
        <div className="button-box">
            <button onClick={uppercase} >Click to upperCase</button>
            <button onClick={lowercase}>Click to lowerCase</button>
        </div>
    </div>
    );
  }
  
  export default Counter;