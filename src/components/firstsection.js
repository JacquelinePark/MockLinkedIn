import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './firstsection.css';

function Firstsection() {
  return (
    <div className="firstsection">
      <header className="firstsection-header">
      <p>Welcome to your professional community</p>
      </header>
      <body>
      <button className='loginbutton' id="googlelogin">Continue with Google</button>
      <p>By clicking Continue to join or sign in, you agree to LinkedIn's <a href="/useragreement">User Agreement</a>, <a href="/privacy">Privacy Policy</a>, and <a href='/cookies'>Cookie Policy</a>. </p>
      </body>
      <img src={require("../images/LinkedIn Image.png")} style={{ width: 750 }}/>
     
      
      
    </div>
  );
}

export default Firstsection;
