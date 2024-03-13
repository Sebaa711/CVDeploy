import "./Header.css";
import profile from "../download.png";

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
            <p>Email</p>
            <p>jsaristizbal3@soy.sena.edu.co</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
