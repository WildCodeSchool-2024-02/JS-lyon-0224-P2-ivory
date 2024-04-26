import PropTypes from "prop-types";
import { useState } from "react";
import TextContent from "../text_content/TextContent";
import Title from "../title/Title";
import styles from "./quizStyle.module.css";

/**
 * Calcule la couleur de fond pour un bouton de réponse.
 * @param {number} index - L'indice de l'option de réponse actuelle.
 * @param {Object} option - L'objet représentant l'option de réponse.
 * @param {number} selectedAnswerIndex - L'indice de l'option de réponse sélectionnée.
 * @returns {string} La couleur de fond du bouton.
 */

function getButtonBackgroundColor(index, option, selectedAnswerIndex) {
  if (selectedAnswerIndex === index) {
    return option.isCorrect ? "green" : "red";
  }
  return "initial";
}

/**
 * Composant Quiz qui affiche un quiz interactif avec des questions et des réponses.
 *
 * @param {Object[]} questions - Un tableau d'objets contenant les questions et leurs réponses.
 * @param {string} questions[].questionText - Le texte de la question.
 * @param {Object[]} questions[].answerOptions - Les options de réponses pour chaque question.
 * @param {string} questions[].answerOptions[].answerText - Le texte de l'option de réponse.
 * @param {boolean} questions[].answerOptions[].isCorrect - Indique si l'option de réponse est correcte.
 */

export default function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  /**
   * Gère le clic sur une option de réponse, mettant à jour l'indice de la réponse sélectionnée.
   * @param {number} index - L'indice de l'option de réponse sélectionnée.
   */
  const handleAnswerOptionClick = (index) => {
    setSelectedAnswerIndex(index);
  };

  const goToNextQuestion = () => {
    setSelectedAnswerIndex(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <Title level="4" title="Notions Quiz" />
      <TextContent text={questions[currentQuestion].questionText} />
      <div className={styles.answerSection}>
        {questions[currentQuestion].answerOptions.map((option, index) => (
          <button
            key={option.answerText}
            type="button"
            onClick={() => handleAnswerOptionClick(index)}
            style={{
              backgroundColor: getButtonBackgroundColor(
                index,
                option,
                selectedAnswerIndex
              ),
            }}
          >
            {option.answerText}
          </button>
        ))}
      </div>
      <button type="button" onClick={goToNextQuestion}>
        Suivant
      </button>
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      questionText: PropTypes.string.isRequired,
      answerOptions: PropTypes.arrayOf(
        PropTypes.shape({
          answerText: PropTypes.string.isRequired,
          isCorrect: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
