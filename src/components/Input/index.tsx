import { useRef, InputHTMLAttributes } from 'react';
import './styles.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function Input({label, ...rest}:InputProps){
    const inputRef = useRef<HTMLInputElement>(null);
    
    return(
        <div className="input-block-component">
            <label htmlFor="local">{label} :</label>
            <input 
                type="text" 
                name="local" 
                id="local" 
                ref={inputRef}
                {...rest}
            />
        </div>
    );
}