import "./Header.css";
import profile from "../download.png";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Header() {
  return (
    <div className="header">
      <div className="headerPhoto">
        <img src={profile} alt="Foto Personal" className="headerPhotoImg" />
      </div>
      <div className="headerNombres">
        <h1>Sebastián Aristizábal</h1>
        <p>Estudiante de analisis y desarrollo de software</p>
      </div>
      <div className="headerContacto">
        <ul className="contactList">
          <li className="contactListItem">
            <p>
              <EmailIcon></EmailIcon>
            </p>
            <p>jsaristizbal3@soy.sena.edu.co</p>
          </li>
          <li className="contactListItem">
            <p>
              <LinkedInIcon></LinkedInIcon>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/sebasti%C3%A1n-aristiz%C3%A1bal-813452271/">
                Sebastian Aristizabal
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
