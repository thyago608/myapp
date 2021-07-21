import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-scheffer.svg";
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="logo" />
      </Link>
    </Container>
  );
}