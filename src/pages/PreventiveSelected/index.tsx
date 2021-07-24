import React, { useRef, FormEvent, useState } from 'react';
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import logoImg from "../../assets/images/icon-scheffer-secundary.svg";
import { Button } from "../../components/Button";
import { Main, Box } from "./styles";

type Params = {
  preventive: string;
  local: string;
};


const Fade = require('react-reveal/Fade');
const Zoom = require('react-reveal/Zoom');
const Bounce = require('react-reveal/Bounce');

type RefProps = {
  current: HTMLInputElement | null;
};

export function PreventiveSelected() {
  //Parâmetros da rota
  const { preventive, local } = useParams<Params>();
  
  //Referência da data
  const inputDateRef = useRef<HTMLInputElement>(null);

  //Referência dos horários
  const inputHourInitialRef = useRef<HTMLInputElement>(null);
  const inputHourFinishRef = useRef<HTMLInputElement>(null);

  const [errorHourInitial, setErrorHourInitial] = useState(false); 
  const [errorHourFinish, setErrorHourFinish] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  function handleCurrentValue(e:FormEvent){
    e.preventDefault();


    handleChangeValue(inputDateRef, setErrorDate);
    handleChangeValue(inputHourInitialRef, setErrorHourInitial);
    handleChangeValue(inputHourFinishRef, setErrorHourFinish);
  }

  function handleChangeValue(ref:RefProps, stateChangeFunction:Function){
    const inputValue = Number(ref.current?.value.length) > 0 ?? false;
     
      if(!inputValue){ 
        stateChangeFunction(true);
        return;
      }

      stateChangeFunction(false);
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
            <input 
              type="date" 
              ref={inputDateRef} 
            />
            <Fade when={errorDate} bottom collapse>
              <span style={{color: 'tomato', display: 'block', marginTop:'0.5rem'}}>Data inválida</span>
            </Fade>
          
            <label>Hora início</label>
            <input 
              type="time"
              ref={inputHourInitialRef}
            />
            <Fade when={errorHourInitial} bottom collapse>
              <span style={{color: 'tomato', display: 'block', marginTop:'0.5rem'}}>Hora inválida</span>
            </Fade>
          
            <label>Hora fim</label>
            <input 
              type="time"
              ref={inputHourFinishRef}
            />
            <Fade when={errorHourFinish} bottom collapse>
              <span style={{color: 'tomato', display: 'block', marginTop:'0.5rem'}}>Hora inválida</span>
            </Fade>

            <Button title="Enviar" onClick={handleCurrentValue}/>
          </form>
        </Main>
      </Bounce>
    </div>
  );
}