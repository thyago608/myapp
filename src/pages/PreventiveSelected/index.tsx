import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import logoImg from "../../assets/images/icon-scheffer-secundary.svg";
import "./styles.scss";
import { Button } from "../../components/Button";

type Params = {
  preventive: string;
  local: string;
};

export function PreventiveSelected() {
  const { preventive, local } = useParams<Params>();

  return (
    <div id="page" className="page-preventive-selected">
      <Header />
      <main className="main-preventive-selected">
        <div className="box-preventive">
          <div className="container-image-preventive-selected">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="container-info-preventive-selected">
            <h1>{preventive}</h1>
            <span>{local}</span>
            <a href="#">Ver detalhes</a>
          </div>
        </div>

        <form className="form-preventive-selected">
          <div className="wrapper-date">
            <span>Data de conclusão:</span>
            <div className="container-input-block">
              <div className="input-block">
                <label htmlFor="day">Dia</label>
                <input type="text" id="day" />
              </div>
              <div className="input-block">
                <label htmlFor="month">Mês</label>
                <input type="text" id="month" />
              </div>
              <div className="input-block">
                <label htmlFor="year">Ano</label>
                <input type="text" id="year" />
              </div>
            </div>
          </div>
          <Button title="Enviar" />
        </form>
      </main>
    </div>
  );
}