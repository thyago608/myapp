import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import Slider from "react-slick";
import "./styles.scss";

type Params = {
  team: string;
};

type Preventive = {
  title: string;
  subtitle: string;
};

export function Preventive() {
  const { team } = useParams<Params>();
  const history = useHistory();
  const [preventive, setPreventive] = useState<Preventive[]>([
    { title: "Ponto de Entrada 3", subtitle: "TE - Sistema Verde" },
    { title: "Ponto de Entrada 4", subtitle: "TE - Sistema Verde" },
    { title: "Portal de Rejeição de Cargas", subtitle: "AE - Sistema Azul" },
    { title: "Berço de Entrada 2", subtitle: "AE - Sistema Azul" },
    { title: "Ponto de Entrada 6", subtitle: "TE - Sistema Verde" },
    { title: "Ponto de Entrada CX Cheia", subtitle: "TE - Sistema Verde" },
    { title: "Portal de Rejeição de Cargas", subtitle: "AE - Sistema Azul" },
    { title: "Berço de Entrada 2", subtitle: "AE - Sistema Azul" },
    { title: "Ponto de Entrada 6", subtitle: "TE - Sistema Verde" },
    { title: "Ponto de Entrada CX Cheia", subtitle: "TE - Sistema Verde" },
    { title: "Ponto de Entrada 6", subtitle: "TE - Sistema Verde" },
    { title: "Ponto de Entrada CX Cheia", subtitle: "TE - Sistema Verde" }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4
  };

  function handleSelectionPreventive(preventive: string, local: string) {
    history.push(`/select-team/${team}/${preventive}/${local}`);
  }

  return (
    <div id="page" className="page-preventive">
      <div className="header-preventive">
        <Header />
        <h1>Equipe {team}</h1>
      </div>
      <main className="main-preventive">
        <div className="preventive-completed">
          <h2>Preventivas Concluídas</h2>

          <Slider {...settings} className="slider">
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul" />
            <Card
              title="Portal de Rejeição de Cargas"
              subtitle="TE - Sistema Verde"
            />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="AE - Sistema Azul"
            />
            <Card title="Berço de Entrada 1" subtitle="TE - Sistema Verde" />
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul" />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="TE - Sistema Azu"
            />
          </Slider>
        </div>
     

        <div className="preventive-accomplish">
          <h2>Preventivas a realizar</h2>

          <div className="wrapper-cards-preventive-accomplish">
            {preventive.map((preventive) => {
              return (
                <Card
                  key={preventive.title}
                  title={preventive.title}
                  subtitle={preventive.subtitle}
                  onClick={() =>
                    handleSelectionPreventive(
                      preventive.title,
                      preventive.subtitle
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}