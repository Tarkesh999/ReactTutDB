import React, { ChangeEvent } from 'react';

const Registration: React.FC = ():JSX.Element =>  {
  const [date, setDate] = React.useState<Date>(() => new Date(Date.now()));
  const [userName, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const handleUserName = (event: ChangeEvent<HTMLInputElement>):void => {
      setUserName(event.target.value);
  }

    const handleEmail = (event: ChangeEvent<HTMLInputElement>):void => {
      setEmail(event.target.value);
  }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>):void => {
      setPassword(event.target.value);
  }
  return (
    <div>
      <h1>Registration Page</h1>
      <h3>{date.toUTCString()}</h3>

      <span>
        UserName: <input type="text" value={userName} placeholder="Enter your name" onChange={handleUserName} />
      </span>
      <br/>

      <span>
        Email: <input type="text" value={email} placeholder="Enter your email" onChange={handleEmail} />
      </span>
      <br />
      <span>
        Password: <input type="password" value={password} placeholder="Password" onChange={handlePassword} />
      </span>

      <button onClick={() => alert(`userName: ${userName} \n email: ${email}`)}>Submit</button>
    </div>
  );
}

export default Registration;
