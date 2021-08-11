import React from 'react';

const DashBoard: React.FC = ():JSX.Element =>  {
 
    const imgSrc = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fdeutsche-bank_416x416.jpg";
  return (
    <div className="Dashboard">
      <img src={imgSrc} style={{height: 100, width: 100}}/>
      <p>Deutsche Bank AG is a German multinational investment bank and financial services company headquartered in Frankfurt, Germany, and dual-listed on the Frankfurt Stock Exchange and the New York Stock Exchange. The bank's network spans 58 countries with a large presence in Europe, the Americas, and Asia.</p>
    </div>
  );
}

export default DashBoard;
