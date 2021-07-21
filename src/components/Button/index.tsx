import { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
};

export function Button({title, ...rest}:ButtonProps){
    return (
        <ButtonComponent {...rest}>{title}</ButtonComponent>
    );
}