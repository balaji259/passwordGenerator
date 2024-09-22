import { useState,useEffect,useRef} from 'react'
import {toast} from 'react-hot-toast'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [length,setLength]=useState(6);
  const [num,setnum]=useState(false);
  const [char,setchar]=useState(false);
  const [pass,setPass]=useState("");

  let inputref=useRef();
  
  let generatePassword=()=>{

  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(num)
    string+="0123456789";
  if(char)
      string+="!@#$%^&*(){}[]|\<>?/~";


    let password="";
    for(let i=0;i<length;i++){
       let char=Math.floor((Math.random()*(string.length)));
       password+=string[char];
    }
  
    console.log(password);
    setPass(password);
  
  }

  useEffect(()=>{
    generatePassword();
  },[length,num,char]);
 

function copypassword(){
  // inputref.current.select()
  navigator.clipboard.writeText(inputref.current.value);
  toast.success("Password copied!");

}

  
  return (
    <div className="outer" >

      <div className="passwordbox">
          <h3>Password Generator</h3>
          <div className="input">
            <input type="text" className="textfield" value={pass} readOnly ref={inputref}/>
            <button className="button" onClick={copypassword}>Copy</button>
          </div>
          <div className="options">
            <input type="range"  value={length} min="6" max="25"  onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor="length">Length:</label>
            <h4 id="length">{length}</h4>
            <label htmlFor="Numbers">Numbers:</label>
            <input type="checkbox" id="Numbers" onChange={(e) => setnum(e.target.checked)}/>
            <label htmlFor="char">Characters</label>
            <input type="checkbox" id="char" onChange={(e) => setchar(e.target.checked)}/>
          </div>
      </div>
      
      </div>
  )
  
}

export default App
