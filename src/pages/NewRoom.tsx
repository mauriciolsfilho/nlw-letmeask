import React from "react";
import logoImg from '../assets/logo.svg';
import bkgImg from "../assets/illustration.svg";
import { Button } from "../shared/components/Button";

import '../styles/auth.scss';

/**
 * Página de criação de sala da aplicação
 */
export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input
            type="text"
            placeholder="Digite o nome da sala"
            />
            <Button type="submit"> Criar sala </Button>
          </form>
          <p>
            Quer entrar em uma sala existente?{' '}
            <a href="https://instagram.com/mauriciolsfilho" target="blank">clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
};
