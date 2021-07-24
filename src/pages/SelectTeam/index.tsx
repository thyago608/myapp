import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import {Main} from "./styles";

const Bounce = require('react-reveal/Bounce');

export function SelectTeam() {
  const history = useHistory();

  function handleNavigateToPreventive(team: number) {
    history.push(`/select-team/${team}`);
  }

  return (
    <div id="page" className="page-select-team">
      <Header />
      <Bounce left>
      <Main>
        <Card title="Equipe 1" onClick={() => handleNavigateToPreventive(1)} />
        <Card title="Equipe 2" onClick={() => handleNavigateToPreventive(2)} />
        <Card title="Equipe 3" onClick={() => handleNavigateToPreventive(3)} />
        <Card title="Equipe 4" onClick={() => handleNavigateToPreventive(4)} />
      </Main>
      </Bounce>
    </div>
  );
}