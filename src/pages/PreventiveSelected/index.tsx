import { useRef, FormEvent } from 'react';
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import logoImg from "../../assets/images/icon-scheffer-secundary.svg";
import { Button } from "../../components/Button";
import { Main, Box } from "./styles";

type Params = {
  preventive: string;
  local: string;
};



const Zoom = require('react-reveal/Zoom');
const Bounce = require('react-reveal/Bounce');


export function PreventiveSelected() {
  const { preventive, local } = useParams<Params>();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCurrentValue(e:FormEvent){
    e.preventDefault();

  }


  return (
    <div id="page" className="page-preventive-selected">
      <Header />
      <Bounce left>
        <Main>
          <Box>
            <div className="container-image-preventive-selected">
              <img src={logoImg} alt="logo" />
            </div>
            <div className="container-info-preventive-selected">
              <h1>{preventive}</h1>
              <span>{local}</span>

              <span>Cód. plano: PM104812</span>
              <span>SBEGTRIL000-MM</span>
              <a href="#">Ver detalhes</a>
            </div>
          </Box>

          <form className="form-preventive-selected">
            <label>Data de conclusão</label>
            <input type="date" ref={inputRef}/>
            <label>Hora início</label>
            <input type="time"/>
            <label>Hora fim</label>
            <input type="time"/>
            <Button title="Enviar" onClick={handleCurrentValue}/>
          </form>
        </Main>
      </Bounce>
    </div>
  );
}