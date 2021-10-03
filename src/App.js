import React from "react";
import './App.css';
import { useState } from 'react';

function App() {
 const [result, setstate] = useState("");

 const handleclick = (e) =>{
   setstate(result.concat(e.target.name));

 }
 const clear = () =>{
    setstate("");
 }
 const backone=()=>{
  setstate(result.slice(0,-1));
 }
 const answer=()=>{
   try {
    setstate(eval(result).toString());
   } catch (error) {
     setstate("Error");
   }
   
 }
  return (
    <>
    <h1 className="heading">Simple Calculator app</h1>
    <div className="conatiner">
      <form>
       <input type="text" value={result}/>
      </form> 
      <div className="keypad">
        <button className="heighlight" onClick={clear} id="clear">Clear</button>
        <button className="heighlight" onClick={backone} id="backspace">C</button>
        <button className="heighlight" name= "/" onClick={handleclick}>/</button>
        <button name= "7" onClick={handleclick}>7</button>
        <button name= "8" onClick={handleclick}>8</button>
        <button name= "9" onClick={handleclick}>9</button>
        <button className="heighlight" name= "*" onClick={handleclick}>*</button>
        <button name= "4" onClick={handleclick}>4</button>
        <button name= "5" onClick={handleclick}>5</button>
        <button name= "6" onClick={handleclick}>6</button>
        <button className="heighlight" name= "-" onClick={handleclick}>-</button>
        <button name= "1" onClick={handleclick}>1</button>
        <button name= "2" onClick={handleclick}>2</button>
        <button name= "3" onClick={handleclick}>3</button>
        <button className="heighlight" name= "+" onClick={handleclick}>+</button>
        <button name= "0" onClick={handleclick}>0</button>
        <button name= "." onClick={handleclick}>.</button>
        <button className="heighlight" onClick={answer} id="result">=</button>
      </div>

    </div>
    
    </>
  );
}

export default App;
