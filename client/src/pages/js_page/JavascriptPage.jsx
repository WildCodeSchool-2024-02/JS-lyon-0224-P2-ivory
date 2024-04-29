import styles from "./JavascriptPageStyle.module.css";
import Title from "../../components/title/Title";
import TextContent from "../../components/text_content/TextContent";
import Picture from "../../components/picture/Picture";
import VideoSearch from "../../components/video_search/VideoSearch";
import Quiz from "../../components/quiz/Quiz";

const data = {
  mainTitle: "JAVASCRIPT",
  mainTitleLevel: 3,
  introTitle: "JAVASCRIPT Introduction",
  introTitleLevel: 4,
  introText: `What is JAVASCRIPT ? 
	JavaScript is a high-level, interpreted programming language primarily used for web development. 
	It is a versatile language that allows developers to add interactivity, dynamic behavior, and complex functionalities to web pages.`,
  introImageSrc: "../src/assets/JavaScript_logo_2.svg.png",
  elementsTitle: "JAVASCRIPT key points ",
  elementsTitleLevel: 4,
  elementsText: `JavaScript is a fundamental technology for building modern web applications and has a significant impact on the way content is presented and interacted with on the internet. 
	Client-Side Language,Cross-Platform,Dynamic Typing,Prototype-based & Event-Driven and Asynchronous. `,

  captionIntroImage: "Examples of javascriot with anothers languages :",
  tagTableSrc: "../src/assets/JS_structure.png",
  tagTableAlt: "tag_example",
  browserTitle: "Elements include",
  browserTitleLevel: 4,
  browserText: `JavaScript consists of several fundamental elements that developers use to write code and create dynamic behavior in web applications. 
	Example of elements : Variables, Data Types ,Operators , Functions & DOM Manipulation.`,
  exampleDom: "This is an example of a basic Javascript DOM Manipulation :",
  DomImageSrc: "../src/assets/DOM-model.svg.png",
  structureTitle: "JAVASCRIPT Page Structure",
  structureTitleLevel: 4,
  structureText: "This is an example of a basic Javascript Page structure",
  structureImageSrc: "../src/assets/structure.png",
};


const questions = [
  {
    questionText: "How do you create a function in JavaScript? ?",
    answerOptions: [
      { answerText: "function myFunction()", isCorrect: true },
      { answerText: "function:myFunction()", isCorrect: false },
      { answerText: "create myFunction()", isCorrect: false },
      { answerText: "function = myFunction()", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the output of this code ? console.log(typeof null);",
    answerOptions: [
      { answerText: "null", isCorrect: false },
      { answerText: "object", isCorrect: true },
      { answerText: "undefined", isCorrect: false },
      { answerText: "number", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which method is used to add an element at the end of an array?",
    answerOptions: [
      { answerText: "array.shift(element)", isCorrect: false },
      { answerText: "array.pop(element)", isCorrect: false },
      { answerText: "array.push(element)", isCorrect: true },
      { answerText: "array.unshift(element)", isCorrect: false },
    ],
  },
  {
    questionText:
      "How can a JavaScript variable be declared conditionally?",
    answerOptions: [
      { answerText: "condition(var x)", isCorrect: false },
      { answerText: "var x = (condition) ? value1 : value2", isCorrect: true },
      { answerText: "var x if (condition)", isCorrect: false },
      { answerText: "if (condition) var x", isCorrect: true },
    ],
  },
];


const videoIds = ["x8r4uem", "x8rbfc5"];

export default function JavascriptPage() {
  return (
    <div className={styles.JavascriptPage}>
      <Title level={data.mainTitleLevel} title={data.mainTitle} />
      <Title level={data.introTitleLevel} title={data.introTitle} />
      <TextContent text={data.introText} />
      <Picture src={data.introImageSrc} />
      <Title level={data.elementsTitleLevel} title={data.elementsTitle} />
      <TextContent text={data.elementsText} />
      <TextContent text={data.captionIntroImage} />
      <Picture src={data.tagTableSrc} alt={data.tagTableAlt} />
      <Title level={data.browserTitleLevel} title={data.browserTitle} />
      <TextContent text={data.browserText} />
      <TextContent text={data.exampleDom} />
      <Picture src={data.DomImageSrc} />
      <Title level={data.structureTitleLevel} title={data.structureTitle} />
      <TextContent text={data.structureText} />
      <Picture src={data.structureImageSrc} alt={data.structureImageAlt} />
      <Quiz questions={questions} />
      <Title level="4" title="Ressources Videos" />
      <VideoSearch videoIds={videoIds} />
    </div>
  );
}
