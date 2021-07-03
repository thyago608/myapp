import { ButtonHTMLAttributes } from "react";
import logoScheffer from "../../assets/images/icon-scheffer-secundary.svg";
import "./styles.scss";

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subtitle?: string;
}

export function Card({ title, subtitle, ...rest }: CardProps) {
  return (
    <button id="card-component" {...rest}>
      <div className="card">
        <div className="container-image-card">
          <img src={logoScheffer} alt="Scheffer icon" />
        </div>
        <span>{title}</span>
      </div>
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </button>
  );
}