import Picture from "../../components/picture/Picture";
import TextContent from "../../components/text_content/TextContent";
import Title from "../../components/title/Title";
import VideoSearch from "../../components/video_search/VideoSearch";
import Quiz from "../../components/quiz/Quiz";

import styles from "./htmlPageStyle.module.css";

const data = {
  mainTitle: "HTML 01",
  mainTitleLevel: 3,
  introTitle: "HTML Introduction",
  introTitleLevel: 4,
  introText: `First of all , what is HTML ? 
	HTML is the standard markup language to create websites. 
	It stands for HyperText Markup Language. 
	HTML describes how a website should be displayed, it's a serie of
	elements.`,
  elementsTitle: "HTML Elements",
  elementsTitleLevel: 4,
  elementsText: `An HTML element is defined by its start tag , its content and its end
	tag. 
	What we call an HTML element is everything between the start tag and
	the end tag. `,
  introImageSrc: "../src/assets/HTML_Intro.jpg",
  introImageAlt: "tag_example",
  captionIntroImage: "Examples of tagnames :",
  tagTableSrc: "../src/assets/Tag_examples.jpg",
  tagTableAlt: "tag_example",
  browserTitle: "Web Browser",
  browserTitleLevel: 4,
  browserText: `Web browsers are used to read HTML documents and display them properly
	without showing the tags 
	Example of browsers : Safari, Chrome , Firefox , Opera.`,
  structureTitle: "HTML Page Structure",
  structureTitleLevel: 4,
  structureText: "This is an example of a basic HTML Page structure",
  structureImageSrc: "../src/assets/HTML_Structure.jpg",
  structureImageAlt: "structure_  example",
  videoTitle: "Ressources Videos",
  videoTitleLevel: 4,
};

const questions = [
  {
    questionText: "What HTML stands for ?",
    answerOptions: [
      { answerText: "HyperText Markup Language", isCorrect: true },
      { answerText: "HyperTheory Marked Lexical", isCorrect: false },
      { answerText: "HyperText Matching Lines", isCorrect: false },
      { answerText: "HyperTouch Marking Language", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is necessary to define an HTML Element ?",
    answerOptions: [
      { answerText: "Just its tag", isCorrect: false },
      { answerText: "Start tag , content , end tag", isCorrect: true },
      { answerText: "content directly with an alt attribute", isCorrect: false },
      { answerText: "A start tag and the content after", isCorrect: false },
    ],
  },
  {
    questionText:
      "What we usually use to read HTML documents ?",
    answerOptions: [
      { answerText: "Document editors", isCorrect: false },
      { answerText: "Just command line instructions", isCorrect: false },
      { answerText: "Browsers", isCorrect: true },
      { answerText: "Softwares", isCorrect: false },
    ],
  },
  {
    questionText:
      "What are the tags I usually find on an HTML page structure ? ",
    answerOptions: [
      { answerText: "<p> <h> only", isCorrect: false },
      { answerText: "<head> only", isCorrect: true },
      { answerText: "<body> <footer> <header> only", isCorrect: false },
      { answerText: "<html> <head> <body> with <title> <p> <h> inside", isCorrect: true },
    ],
  },
];
const videoIds = ["x7xv5n0", "x8wg4uy"];

export default function HTMLPage() {
  return (
    <div className={styles.htmlPage}>
      <Title level={data.mainTitleLevel} title={data.mainTitle} />
      <Title level={data.introTitleLevel} title={data.introTitle} />
      <TextContent text={data.introText} />
      <Title level={data.elementsTitleLevel} title={data.elementsTitle} />
      <TextContent text={data.elementsText} />
      <Picture src={data.introImageSrc} alt={data.introImageAlt} />
      <TextContent text={data.captionIntroImage} />
      <Picture src={data.tagTableSrc} alt={data.tagTableAlt} />
      <Title level={data.browserTitleLevel} title={data.browserTitle} />
      <TextContent text={data.browserText} />
      <Title level={data.structureTitleLevel} title={data.structureTitle} />
      <TextContent text={data.structureText} />
      <Picture src={data.structureImageSrc} alt={data.structureImageAlt} />
      <Quiz questions={questions} />
      <Title level={data.videoTitleLevel} title={data.videoTitle} />
      <VideoSearch videoIds={videoIds} />
    </div>
  );
}
