import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useHistory } from "react-router-dom";
import { Main } from "./styles";

export function Home() {
  const history = useHistory();

  function handleNavigateToSelectTeam() {
    history.push("/select-team");
  }

  function handleNavigateToPreventiveRegistration() {
    history.push("/6BEY6D7AC9");
  }

  return (
    <div id="page">
      <Header />
      <Main >
        <Card title="Preventivas" onClick={handleNavigateToSelectTeam} />
        <Card
          title="Cadastrar Preventivas"
          onClick={handleNavigateToPreventiveRegistration}
        />
      </Main>
    </div>
  );
}