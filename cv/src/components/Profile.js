// Profile section will have: Profile Pic, profile details and links to personal linkedIn and GitHub profile
import "./profile.css";

// Profile Pic Component
const ProfilePic = (props) => {
  return (
    <img className="profilePic" src={props.profilePic} alt="profilePic"></img>
  );
};

// Profile Details Component
// Includes address, email, mobile number, also valid driving license
const ContactDetails = (props) => {
  return (
    <section className="profileDetailsContainer">
      <p>
        <b>Address:</b> {props.address}
      </p>
      <p>
        <b>Email Address:</b> {props.email}
      </p>
      <p>
        <b>MobileNumber:</b> {props.mobileNumber}
      </p>
      <p>{props.drivingLicense}</p>
    </section>
  );
};

// Links to external profiles (LinkedIn, GitHub)
const ExternalProfiles = (props) => {
  return (
    <section className="externalProfiles">
      <a href={props.linkedIn}>LinkedIn</a>
      <br />
      <a href={props.gitHub}>GitHub</a>
    </section>
  );
};

const Profile = (props) => {
  return (
    <section className="profileContainer">
      <picture className="profilePicContainer">
        <ProfilePic profilePic={props.profilePic} />
      </picture>

      <ContactDetails
        address={props.address}
        email={props.email}
        mobileNumber={props.mobileNumber}
        drivingLicense={props.drivingLicense}
      />
      <ExternalProfiles linkedIn={props.linkedIn} gitHub={props.gitHub} />
    </section>
  );
};

export default Profile;
