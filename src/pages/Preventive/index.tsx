import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import Slider from "react-slick";
import {
  Wrapper,
  Main
} from './styles';

type Params = {
  team: string;
};

type Preventive = {
  title: string;
  subtitle: string;
  term:string;
};

const Zoom = require('react-reveal/Zoom');
const Bounce = require('react-reveal/Bounce')


export function Preventive() {
  const { team } = useParams<Params>();
  const history = useHistory();
  const [preventive, setPreventive] = useState<Preventive[]>([
    { title: "Ponto de Entrada 3", subtitle: "TE - Sistema Verde", term:"Trimestral" },
    { title: "Ponto de Entrada 4", subtitle: "TE - Sistema Verde", term:"Bimestral"  },
    { title: "Portal de Rejeição de Cargas", subtitle: "AE - Sistema Azul", term:"Mensal"  },
    { title: "Berço de Entrada 2", subtitle: "AE - Sistema Azul", term:"Semetral"  },
    { title: "Ponto de Entrada 6", subtitle: "TE - Sistema Verde", term:"Trimestral"  },
    { title: "Ponto de Entrada CX Cheia", subtitle: "TE - Sistema Verde", term:"Trimestral"  },
    { title: "Portal de Rejeição de Cargas", subtitle: "AE - Sistema Azul", term:"Mensal"  },
    { title: "Berço de Entrada 2", subtitle: "AE - Sistema Azul", term:"Bimestral"  },
    { title: "Ponto de Entrada 6", subtitle: "TE - Sistema Verde", term:"Trimestral"  },
    { title: "Ponto de Entrada CX Cheia", subtitle: "TE - Sistema Verde", term:"Mensal"  },
    { title: "Ponto de Entrada 6", subtitle: "TE - Sistema Verde", term:"Mensal"  },
    { title: "Ponto de Entrada CX Cheia", subtitle: "TE - Sistema Verde", term:"Bimestral"  }
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function handleSelectionPreventive(preventive: string, local: string) {
    history.push(`/select-team/${team}/${preventive}/${local}`);
  }

  return (
    <div id="page" className="page-preventive">
      <Wrapper>
        <Header />
        <h1>Equipe {team}</h1>
      </Wrapper>
      <Bounce left >
      <Main>
        <div className="preventive-completed">
          <h2>Preventivas Concluídas</h2>

          <Slider {...settings} className="slider">
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul"/>
            <Card
              title="Portal de Rejeição de Cargas"
              subtitle="TE - Sistema Verde"
              term="Bimestral"
            />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="AE - Sistema Azul"
              term="Mensal"
            />
            <Card 
              title="Berço de Entrada 1"
              subtitle="TE - Sistema Verde"
              term="Semestral"
            />
            <Card 
              title="Ponto de Entrada 3" 
              subtitle="AE - Sistema Azul" 
              term="Trimestral"
            />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="TE - Sistema Azul"
              term="Semestral"
            />
          </Slider>
        </div>
     

        <div className="preventive-accomplish">
          <h2>Preventivas a realizar</h2>
          <div className="wrapper-cards-preventive-accomplish">
            {preventive.map((preventive) => {
              return (
                <Zoom bottom exit>
                <Card
                  key={preventive.title}
                  title={preventive.title}
                  subtitle={preventive.subtitle}
                  term={preventive.term}
                  onClick={() =>
                    handleSelectionPreventive(
                      preventive.title,
                      preventive.subtitle
                    )
                  }
                />
                </Zoom>
              );
            })}
          </div>
        </div>
      </Main>
      </Bounce>
    </div>
  );
}