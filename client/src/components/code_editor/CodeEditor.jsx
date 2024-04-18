import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";

/**
 * Affiche un exemple de code avec coloration syntaxique.
 *
 * Exemple du parent : <CodeEditor language="javascript" codeString={exempleDeCode} />
 *
 * @param {Object} props Les propriétés passées au composant CodeEditor.
 * @param {string} props.language Le langage de programmation du code (e.g., "javascript").
 * @param {string} props.codeString Le code à afficher, sous forme de chaîne de caractères.
 * @returns {React.Element} Un élément React qui rend le code avec coloration syntaxique.
 */

export default function CodeEditor({ language, codeString }) {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {codeString.trim()}
    </SyntaxHighlighter>
  );
}

// Définition des propTypes pour le composant CodeEditor
CodeEditor.propTypes = {
  language: PropTypes.string.isRequired,
  codeString: PropTypes.string.isRequired,
};
