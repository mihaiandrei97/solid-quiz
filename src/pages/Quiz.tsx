import { A, useParams } from "@solidjs/router";
import { Accessor, Component, For, Show, createSignal } from "solid-js";
import { IQuestion, getQuestions } from "../utils/quiz";

const TOTAL_NB_OF_QUESTIONS = 3;

const Finish: Component<{ score: number }> = ({ score }) => {
  return (
    <div class="text-white flex flex-col container max-w-xl m-auto items-center justify-center gap-8">
      <h1 class="text-4xl">Quiz App</h1>
      <p class="text-[8rem]">🎉</p>
      <div class="text-center">
        <h2 class="text-2xl mb-2">Congratulations!</h2>
        <h3 class="text-xl">
          You scored {score}/{TOTAL_NB_OF_QUESTIONS} right answers.
        </h3>
      </div>
      <A class="underline text-lg hover:opacity-95" href="/">
        Take another quiz
      </A>
    </div>
  );
};

const Question: Component<{
  question: () => IQuestion;
  handleAnswerSelect: (a: string) => void;
  userAnswer: Accessor<string>;
  submitted: Accessor<boolean>;
  submit: () => void;
  handleNextQuestion: () => void;
}> = ({
  question,
  handleAnswerSelect,
  userAnswer,
  submit,
  submitted,
  handleNextQuestion,
}) => {
  function getStyle(id: string, correct: boolean) {
    if (!submitted()) {
      return userAnswer() === id ? "bg-gray-600" : "bg-gray-800";
    }
    if (userAnswer() === id) {
      return correct ? "bg-green-500" : "bg-red-500";
    }
    return "bg-gray-800";
  }

  return (
    <div class="w-full container flex flex-col justify-center items-center">
      <h2 class="text-3xl mb-8">{question().text}</h2>
      <ul class="flex flex-col gap-4 w-full">
        <For each={question().answers}>
          {(answer) => {
            return (
              <li>
                <button
                  class={`p-8 rounded text-center w-full cursor-pointer hover:bg-gray-600 ${getStyle(
                    answer.id,
                    answer.correct
                  )}`}
                  onClick={() => handleAnswerSelect(answer.id)}
                >
                  {answer.text}
                </button>
              </li>
            );
          }}
        </For>
      </ul>
      <div>
        <Show
          when={!submitted()}
          fallback={
            <button
              class="bg-blue-700 p-4 rounded mt-4 text-center ml-auto disabled:bg-gray-400"
              onClick={() => handleNextQuestion()}
            >
              Next
            </button>
          }
        >
          <button
            class="bg-purple-700 p-4 rounded mt-4 text-center ml-auto disabled:bg-gray-400"
            onClick={() => submit()}
            disabled={!userAnswer()}
          >
            Submit
          </button>
        </Show>
      </div>
    </div>
  );
};

const QuizPage: Component = () => {
  const params = useParams();
  const questions = getQuestions(params.slug, TOTAL_NB_OF_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    createSignal<number>(0);
  const currentQuestion = () => questions[currentQuestionIndex()];
  console.log(currentQuestion);
  const [userTotalScore, setUserTotalScore] = createSignal<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = createSignal<boolean>(false);
  const [userAnswer, setUserAnswer] = createSignal<string>("");
  const [submitted, setSubmitted] = createSignal(false);

  function handleAnswerSelect(answerId: string) {
    if (!submitted() && userAnswer() !== answerId) {
      setUserAnswer(answerId);
    }
  }

  function incrementUserTotalScore() {
    const correctAnswer = currentQuestion().answers.find(
      (item) => item.correct
    );
    if (!correctAnswer) return;
    if (correctAnswer.id === userAnswer()) {
      setUserTotalScore((prev) => prev + 1);
    }
  }

  function submit() {
    setSubmitted(true);
    incrementUserTotalScore();
    if (currentQuestionIndex() === questions.length - 1) {
      setIsQuizCompleted(true);
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex() < questions.length - 1) {
      console.log("new question");
      setCurrentQuestionIndex((prev) => prev + 1);
      setUserAnswer("");
      setSubmitted(false);
    }
  }

  return (
    <div class="h-full flex flex-col justify-center items-center gap-5 text-white w-full container mx-auto">
      <Show
        when={!isQuizCompleted()}
        fallback={<Finish score={userTotalScore()} />}
      >
        <div class="mb-6 lg:mb-9 w-full container flex flex-col gap-4">
          <ul class="flex gap-2">
            <For each={Array(TOTAL_NB_OF_QUESTIONS).fill(0)}>
              {(_, idx) => {
                return (
                  <li
                    class={`h-1 w-full ${
                      idx() <= currentQuestionIndex()
                        ? "bg-purple-600"
                        : "bg-purple-100"
                    }`}
                  ></li>
                );
              }}
            </For>
          </ul>
          <span class="ml-auto">
            {currentQuestionIndex() + 1} / {TOTAL_NB_OF_QUESTIONS}
          </span>
        </div>
        <Question
          question={currentQuestion}
          handleAnswerSelect={handleAnswerSelect}
          userAnswer={userAnswer}
          submit={submit}
          submitted={submitted}
          handleNextQuestion={handleNextQuestion}
        />
      </Show>
    </div>
  );
};

export default QuizPage;
