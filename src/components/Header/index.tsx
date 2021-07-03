import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-scheffer.svg";
import "./styles.scss";

export function Header() {
  return (
    <header id="component-header">
      <Link to="/" className="container-image-header">
        <img src={logoImg} alt="logo" />
      </Link>
    </header>
  );
}