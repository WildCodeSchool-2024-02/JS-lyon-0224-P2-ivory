import Title from "../../components/title/Title";
import TextContent from "../../components/text_content/TextContent";
import Picture from "../../components/picture/Picture";
import VideoSearch from "../../components/video_search/VideoSearch";
import styles from "./cssPageStyle.module.css"

const css= {
  mainTitle: "CSS 01",
  mainTitleLevel: 3,
  introTitle: "CSS Introduction",
  introTitleLevel: 4,
  introText: `Cascading Style Sheets is a fairly old technology as far as the Web is concerned. The first
ideas about CSS were presented as early as 1994, and three major versions of the technology
have been developed since then.
But, what is its utility?
Css can to stilyzed your website
Symply, we can say HTML is a website's body, and CSS is its clothes`,
  introImageSrc: "../src/assets/picture-css-course.jpg",
  introImageAlt: "css schema",

  elementsTitle: "How to use CSS?",
  elementsTitleLevel: 4,
  elementsText: `First, you create a new file.css . CSS rules are defined as a property name followed by a colon and then a property value.
Individual rules are terminated by semicolons, with the final rule having an optional
semicolon. The following is the basic syntax:`,
  elementsImage:"../src/assets/css-rule-schema.jpg",
  elementsImageAlt:"exemple schema",
  secondElementTitle: "How to apply CSS to HTML?",
  secondElementLevel: 4,
  secondElementText: `In the <head> section of your HTML document, use the <link> tag to link your CSS file. This establishes the connection between your HTML and CSS files.`,
};
const videoIds = ["xoe5tu", "x2mqme2"];
export default function CSSPage() {
  return (
    <div className={styles.cssPage}>
      <Title level={css.mainTitleLevel} title={css.mainTitle} />
      <Title level={css.introTitleLevel} title={css.introTitle} />
      <TextContent text={css.introText} />
      <Picture src={css.introImageSrc} alt={css.introImageAlt} />
      <Title level={css.elementsTitleLevel} title={css.elementsTitle} />
      <TextContent text={css.elementsText} />
      <Picture src={css.elementsImage} alt={css.elementsImageAltAlt} />
      <Title level={css.secondElementLevel} title={css.secondElementTitle} />
      <TextContent text={css.secondElementText} />
      <VideoSearch videoIds={videoIds}/>
    </div>
  );
}
