import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./quiz.css";

const QuizItem = ({ quiz, link, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { quizTitle, title, image, description } = quiz;

  const getColorClass = (index) => {
    const colors = [
      "bg-green",
      "bg-pink",
      "bg-yellow",
      "bg-red",
      "bg-blue",
      "bg-purple",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  return (
    <Fragment>
      <div
        className={`quiz-card `}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
          <div
            className={`card-front rounded-lg hover:bg-opacity-50 focus:ring-4 focus:outline-none ${getColorClass(
              index
            )}`}
          >
            {/* Front of the card */}
            <div className="p-5 flex flex-col h-full">
              <Link to={`/quizzes/${link}`} className="flex-grow">
                <h2 className="mt-5 text-white">
                  {quizTitle}
                  {title}
                </h2>
                <div className="flex items-center justify-center h-[280px]">
                  <img
                    src={image}
                    alt={quizTitle}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </Link>

              <div className="mt-auto flex justify-end">
                <Link
                  to={`/quizzes/${link}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Take a quiz
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`card-back p-5 rounded-lg hover:bg-opacity-50 focus:ring-4 focus:outline-none ${getColorClass(
              index
            )}`}
          >
            {/* Back of the card */}
            <div className="p-5 flex flex-col h-full">
              <Link to={`/quizzes/${link}`}>
                <h2 className="text-white">
                  {quizTitle}
                  {title}
                </h2>
                <p className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  {description}
                </p>
              </Link>
              <div className="mt-auto flex justify-end">
                <Link
                  to={`/quizzes/${link}`}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`}
                >
                  Take a quiz
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuizItem;
