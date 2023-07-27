import type { Component } from "solid-js";
import NinjaImage from "./images/ninja.png";

const App: Component = () => {
  return (
    <div class="h-full flex flex-col justify-center items-center gap-5">
      <img src={NinjaImage} />
      <h1 class="text-3xl text-white">Quiz App</h1>
      <h1 class="text-3xl text-white">Test your CSS knowledge</h1>
      <p class="text-gray-400 max-w-xl text-center">
        Test your CSS knowledge with our quiz app and see if you're a true web
        design whiz!
      </p>
      <button class="bg-blue-400 px-8 py-4 rounded-2xl text-white">
        Start
      </button>
    </div>
  );
};

export default App;
