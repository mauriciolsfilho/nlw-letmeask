import React from "react";
import logoImg from '../assets/logo.svg';
import { useHistory } from "react-router";
import bkgImg from "../assets/illustration.svg";
import googleImg from "../assets/google-icon.svg";
import { Button } from "../shared/components/Button";

import '../styles/auth.scss';

/**
 * Página home da aplicação
 */
export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    history.push('/create-room');
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={bkgImg} alt="Ans quest imagem background"/>
        <strong>Crie salas de perguntas e respostas ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo letmeask"/>
          <button className="create-room" onClick={handleCreateRoom}>
          <img src={googleImg} alt="logo google"/>
            Crie uma sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input
            type="text"
            placeholder="Digite o codigo da sala"
            />
            <Button type="submit"> Entrar na sala </Button>
          </form>
        </div>
      </main>
    </div>
  );
};
