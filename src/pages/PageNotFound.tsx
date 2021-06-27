import React from "react";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div>
      <h1>Página Não encontrada</h1>
      <br />
      <Link to="/">Voltar à Home</Link>
    </div>
  );
}
