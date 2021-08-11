import React,{useState,ChangeEvent} from 'react';
import './App.css';

interface IAppOwnProps{
  username:string |undefined;
  userType: 'admin'|'moderator'|'user'|'guest';
}

const App: React.FC<IAppOwnProps> = ({userType,username}):JSX.Element=> {
const [time,setTime] = useState<Date>(()=>new Date(Date.now()))
const [message,setMessage] = useState<string>('')


  setInterval(()=>{
    setTime(new Date(Date.now()))
  },1000)

  const handleTextchange = (event:ChangeEvent<HTMLInputElement>):void=>{
    setMessage(event.target.value)
  }
  
  return (
    <div className="App">
     <h1>{username} is giving React Demo Application with Typescript</h1>
     <h3> Role assigned is {userType}</h3>
     <p>
       {time.toUTCString()}
     </p>
     <p>
       <input type ='text' placeholder="Enter your message" value = {message} onChange={handleTextchange}/>
     </p>
     Your message : {message || ''}
    </div>
  );
}

export default App;