import styles from "./reactpageStyle.module.css";
import Title from "../../components/title/Title";
import TextContent from "../../components/text_content/TextContent";
import Picture from "../../components/picture/Picture";
import VideoSearch from "../../components/video_search/VideoSearch";

const data = {
  mainTitle: "REACT",
  mainTitleLevel: 3,
  introTitle: "REACT Introduction",
  introTitleLevel: 4,
  introText: `What is REACT ? 
	React is a popular JavaScript library for building user interfaces, particularly for single-page applications and large-scale web applications. It was developed by Facebook and released as an open-source project in 2013. React allows developers to create reusable UI components that can efficiently update and render the user interface based on changes to data.`,
  introImageSrc: "../src/assets/React logo js.jpg",
  elementsTitle: "REACT key points ",
  elementsTitleLevel: 4,
  elementsText: `React is widely used for building modern web applications due to its component-based architecture, performance optimizations, and developer-friendly features. Its flexibility, scalability, and robust ecosystem make it a powerful tool for front-end development.
  Component-Based Architecture,Virtual DOM (Document Object Model),JSX (JavaScript XML),One-Way Data Binding,Declarative Syntax,React Hooks`,

  captionIntroImage: "Why and Where Should you Use React for Web Development?",
  tagTableSrc: "../src/assets/react use for.png",
  tagTableAlt: "tag_example",
  browserTitle: "Elements include",
  browserTitleLevel: 4,

  browserText: `JavaScript library used for creating user interfaces. Most of engineers prefer not to call it a framework since it gives much freedom than Vue or Angular. The seven year old, open source framework provides a relatively new technology. React.js allows data and interface to be updated independently.`,
  exampleDom:
    "These are some of the key aspects of React elements. They provide a flexible and declarative way to define the UI structure of your React applications.:",
  DomImageSrc: "../src/assets/react structure.png",

  structureTitle: "Run the React Application",
  structureTitleLevel: 4,
  structureText:
    "Run this command to move to the my-react-app directory A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar. :",
  structureImageSrc: "../src/assets/React APP.png",
};

const videoIds = ["x8l9cjx", "x7szvlo"];

export default function REACTPage() {
  return (
    <div className={styles.REACTPage}>
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
