import { createSignal, type Component, Show, For } from "solid-js";
import NinjaImage from "../images/ninja.png";
import { getQuizzes } from "../utils/quiz";
import { A } from "@solidjs/router";

const WelcomeScreen: Component<{ markAsStarted: () => void }> = ({
  markAsStarted,
}) => {
  return (
    <>
      <img src={NinjaImage} />
      <h1 class="text-3xl text-white">Quiz App</h1>
      <h1 class="text-3xl text-white">Test your CSS knowledge</h1>
      <p class="text-gray-400 max-w-xl text-center">
        Test your CSS knowledge with our quiz app and see if you're a true web
        design whiz!
      </p>
      <button
        onClick={() => markAsStarted()}
        class="bg-blue-400 px-8 py-4 rounded-2xl text-white hover:opacity-95"
      >
        Start
      </button>
    </>
  );
};

const SelectQuiz: Component = () => {
  const quizzes = getQuizzes();
  return (
    <>
      <h1 class="text-4xl mb-8 text-white">Available Quizzes</h1>
      <ul class="grid grid-cols-3 gap-14 text-center">
        <For each={quizzes}>
          {(quiz) => {
            return (
              <A href={quiz.available ? `/quiz/${quiz.name.toLowerCase()}`: `/`}>
                <li
                  class={`bg-purple-800 p-16 text-white flex flex-col gap-4 rounded-xl cursor-pointer hover:scale-110 transition duration-500 ${
                    quiz.available ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div>
                    <img src={quiz.img} />
                  </div>
                  <h3>{quiz.name}</h3>
                  <p>{quiz.level}</p>
                </li>
              </A>
            );
          }}
        </For>
      </ul>
    </>
  );
};

const HomePage: Component = () => {
  const [status, setStatus] = createSignal<"not-started" | "started">(
    "not-started"
  );

  function markAsStarted() {
    setStatus("started");
  }

  return (
    <div class="h-full flex flex-col justify-center items-center gap-5">
      <Show when={status() === "not-started"} fallback={<SelectQuiz />}>
        <WelcomeScreen markAsStarted={markAsStarted} />
      </Show>
    </div>
  );
};

export default HomePage;
