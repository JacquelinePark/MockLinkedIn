import './firstsection.css';

function Firstsection() {
  return (
    <div className="firstsection">
      <header className="firstsection-header">
      <p>Welcome to your professional community</p>
      </header>
      <p> Add login buttons here</p>
      <p>By clicking Continue to join or sign in, you agree to LinkedIn's User Agreement, Privacy Policy, and Cookie Policy. </p>
      <img src={require("../images/LinkedIn Image.png")} style={{ width: 750 }}/>
      
      
    </div>
  );
}

export default Firstsection;
