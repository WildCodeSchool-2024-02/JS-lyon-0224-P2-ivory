import styles from "./JavascriptPageStyle.module.css";
import Title from "../../components/title/Title";
import TextContent from "../../components/text_content/TextContent";
import Picture from "../../components/picture/Picture";
import VideoSearch from "../../components/video_search/VideoSearch";

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
  tagTableSrc: "../src/assets/JS structure.png",
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
      <Title level="4" title="Ressources Videos" />
      <VideoSearch videoIds={videoIds} />
    </div>
  );
}
