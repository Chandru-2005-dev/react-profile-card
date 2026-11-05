import profile from "./assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faPinterest,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function Profile(props) {
  return (
    <div className="card">
      <div className="card-container">
        <img className="image" src={profile} alt="Profile" />
        <div className="card-content">
          <h1 className="heading">{props.name}</h1>
          <p className="role-content">{props.role}</p>
          <p className="content">{props.content}</p>
          <div className="icons">
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faCodepen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
