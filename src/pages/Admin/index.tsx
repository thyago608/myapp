import { useHistory } from 'react-router-dom';
import { FormEvent} from 'react';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Main} from "./styles";

export function Admin() {
  
  const history = useHistory();

  async function handleWithLogin(e:FormEvent){
    e.preventDefault();
    
    history.push('/6BEY6D7AC9/f10a7d9b1804add91c825fec4bc1729f');
  }

  return (
    <div id="page">
      <Header />
      <Main className="page-admin">
        <form onSubmit={handleWithLogin}>
          <input type="number" placeholder="Matrícula" />
          <Button title="Entrar" type="submit"/>
        </form>
      </Main>
    </div>
  );
}