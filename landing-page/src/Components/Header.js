import "./Header.css";
import React from "react";

// Welcome user Message component
const Welcome = (props) => {
  return <p id="welcomeMsg">Welcome {props.name}</p>;
};

// Sign up component
const SignUp = () => {
  return (
    <div className="signUpButtonContainer">
      <button type="button">Sign Up</button>
    </div>
  );
};

// CompanyLogo component
const CompanyLogo = (props) => {
  return (
    <picture className="companyLogoContainer">
      <img
        className="companyLogo"
        src={props.companyLogo}
        alt="companyLogo"
      ></img>
    </picture>
  );
};

// Logout
class LogOut extends React.Component {
  constructor(props) {
    super(props);
  }

  logOutAlert() {
    alert("User has logged out");
  }

  render() {
    return (
      <div className="logOutButtonContainer">
        <button type="button" onClick={this.logOutAlert}>
          Log Out
        </button>
      </div>
    );
  }
}

// Header displaying logo, company and welcome message/sign up button depending on user logged in status
const Header = (props) => {
  const loggedInStatus = props.loggedInStatus;

  // If user is logged in, display welcome message with their name
  if (loggedInStatus == "true") {
    return (
      <header className="headerContainer">
        <h1>SHEIN</h1>
        <Welcome name={props.name} />
        <LogOut />
        <CompanyLogo companyLogo={props.companyLogo} />
      </header>
    );
  }

  // Else if user is not logged on, provide them a button to sign up
  else if (loggedInStatus == "false") {
    return (
      <header className="headerContainer">
        <h1>SHEIN</h1>
        <SignUp />
        <CompanyLogo companyLogo={props.companyLogo} />
      </header>
    );
  }
};

export default Header;