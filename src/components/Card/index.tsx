import { ButtonHTMLAttributes } from "react";
import logoScheffer from "../../assets/images/icon-scheffer-secundary.svg";
import { Wrapper } from "./styles";


type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subtitle?: string;
  term?:string;
}

export function Card({ title, subtitle, term, ...rest }: CardProps) {
  return (
    <Wrapper id="card-component" {...rest}>
      <div className="card">
        <div className="container-image-card">
          <img src={logoScheffer} alt="Scheffer icon" />
        </div>
        <span>{title}</span>
        {subtitle && <span className="subtitle">{subtitle}</span>}
        {term && <span className="term">{term}</span>}
      </div>
    </Wrapper>
  );
}