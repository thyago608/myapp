import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import "./styles.scss";

export function PreventiveRegistration() {
  return (
    <div id="page" className="page-registration">
      <Header />
      <main className="page-preventive-registration">
        <form>
          <input type="number" placeholder="RG" />
          <Button title="Entrar" />
        </form>
      </main>
    </div>
  );
}