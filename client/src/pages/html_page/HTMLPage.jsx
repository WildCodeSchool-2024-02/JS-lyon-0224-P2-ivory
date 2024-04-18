import Picture from "../../components/picture/Picture";
import TextContent from "../../components/text_content/TextContent";
import Title from "../../components/title/Title";
import VideoSlider from "../../components/video_slider/VideoSlider";

import styles from "./htmlPageStyle.module.css";

const data = {
  mainTitle: "HTML 01",
  mainTitleLevel: 3,
  introTitle: "HTML Introduction",
  introTitleLevel: 4,
  introText: `First of all , what is HTML ? <br />
	HTML is the standard markup language to create websites. <br />
	It stands for HyperText Markup Language. <br />
	HTML describes how a website should be displayed, it's a serie of
	elements.`,
  elementsTitle: "HTML Elements",
  elementsTitleLevel: 4,
  elementsText: `An HTML element is defined by its start tag , its content and its end
	tag. <br />
	What we call an HTML element is everything between the start tag and
	the end tag. <br />`,
  introImageSrc: "../src/assets/HTML_Intro.jpg",
  introImageAlt: "tag_example",
  captionIntroImage: "Examples of tagnames :",
  tagTableSrc: "../src/assets/Tag_examples.jpg",
  tagTableAlt: "tag_example",
  browserTitle: "Web Browser",
  browserTitleLevel: 4,
  browserText: `Web browsers are used to read HTML documents and display them properly
	without showing the tags <br />
	Example of browsers : Safari, Chrome , Firefox , Opera.`,
  structureTitle: "HTML Page Structure",
  structureTitleLevel: 4,
  structureText: "This is an example of a basic HTML Page structure",
  structureImageSrc: "../src/assets/HTML_Structure.jpg",
  structureImageAlt: "structure_  example",
  videoTitle: "Ressources Videos",
  videoTitleLevel: 4,
};

export default function HTMLPage() {
  return (
    <div className={styles.htmlPage}>
      <Title level={data.mainTitleLevel} title={data.mainTitle} />
      <Title level={data.introTitleLevel} title={data.introTitle} />
      <TextContent text={data.introText} />
      <Title level={data.elementsTitleLevel} title={data.elementsTitle} />
      <Picture src={data.introImageSrc} alt={data.introImageAlt} />
      <TextContent text={data.captionIntroImage} />
      <Picture src={data.tagTableSrc} alt={data.tagTableAlt} />
      <Title level={data.browserTitleLevel} title={data.browserTitle} />
      <TextContent text={data.browserText} />
      <Title level={data.structureTitleLevel} title={data.structureTitle} />
      <TextContent text={data.structureText} />
      <Picture src={data.structureImageSrc} alt={data.structureImageAlt} />
      <Title level={data.videoTitleLevel} title={data.videoTitle} />
      <VideoSlider />
    </div>
  );
}
