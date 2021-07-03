import { ButtonHTMLAttributes } from "react";
import logoScheffer from "../../assets/images/icon-scheffer-secundary.svg";
import "./styles.scss";

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subtitle: string;
  dateCompleted: string;
}

export function CardSecundary({ title, subtitle, dateCompleted, ...rest }: CardProps) {
  return (
    <button id="card-component-secundary" {...rest}>
      <div className="card-secundary">
        <div className="container-image-card-secundary">
          <img src={logoScheffer} alt="Scheffer icon" />
        </div>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
      <span className="date"><strong>Data de conclusão:</strong>{dateCompleted}</span>
    </button>
  );
}