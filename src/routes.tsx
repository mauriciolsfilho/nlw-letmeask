import React from "react";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { PageNotFound } from "./pages/PageNotFound";
import { BrowserRouter, Route } from "react-router-dom";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/create-room" component={NewRoom} />
      <Route component={PageNotFound} />
    </BrowserRouter>
  );
}
