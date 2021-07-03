import { Header } from '../../components/Header';
import { CardSecundary } from '../../components/CardSecundary';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import './styles.scss';
import { useState } from 'react';

type Preventive = {
    title: string;
    subtitle: string;
    dateCompleted: string;
}

export function PreventiveRegistration(){
    const [preventives, setPreventives] = useState<Preventive[]>([
        {title:"Ponto de Entrada 3", subtitle:"AE - Sistema Azul", dateCompleted:"12/01/21"},
        {title:"Berço de Entrada 1", subtitle:"AE - Sistema Azul", dateCompleted:"19/06/21"},
        {title:"Ponto de Entrada CX Vazia", subtitle:"TE - Sistema Verde", dateCompleted:"02/06/21"},
        {title:"Ponto de Entrega 2", subtitle:"TE - Sistema Verde", dateCompleted:"04/04/21"},
        {title:"Berço de Entrada CX Cheia", subtitle:"AE - Sistema Azul", dateCompleted:"06/03/21"},
        {title:"Portal Rejeição", subtitle:"TE - Sistema Verde", dateCompleted:"08/02/21"},
        {title:"Ponto de Entrada 3", subtitle:"AE - Sistema Azul", dateCompleted:"12/01/21"},
        {title:"Berço de Entrada 1", subtitle:"AE - Sistema Azul", dateCompleted:"19/06/21"},
        {title:"Ponto de Entrada CX Vazia", subtitle:"TE - Sistema Verde", dateCompleted:"02/06/21"},
        {title:"Ponto de Entrega 2", subtitle:"TE - Sistema Verde", dateCompleted:"04/04/21"},
        {title:"Berço de Entrada CX Cheia", subtitle:"AE - Sistema Azul", dateCompleted:"06/03/21"},
        {title:"Portal Rejeição", subtitle:"TE - Sistema Verde", dateCompleted:"08/02/21"},
    ]);
    return(
        <div className="page-preventive-registration">
            <Header/>
            <main className="main-preventive-registration">
             <form action="">
                <Input label="local" />
                <Input label="setor" />
                <Input label="pdf" />
                <Button title="Cadastrar" type="submit"/>
             </form>

             <section className="preventives-completed-admin">
                 <h1>Preventivas Concluídas</h1>
                 <div className="wrapper-preventives-completed-admin">
                 {
                     preventives.map(preventive =>(
                         <CardSecundary 
                            title={preventive.title}
                            subtitle={preventive.subtitle}
                            dateCompleted={preventive.dateCompleted}
                        />
                     ))
                 }
                </div>
             </section>
            </main>
        </div>        
    );
}