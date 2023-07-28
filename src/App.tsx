import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import HomePage from "./pages/Home";
import QuizPage from "./pages/Quiz";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/quiz/:slug" component={QuizPage} />
    </Routes>
  );
};

export default App;
