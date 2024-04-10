import "./Lesson-styles.css"

function Lesson() {
    return (
        <div className="lesson">
            <h3 className="titreLesson">HTML 01</h3>
            <div className="contentLesson">
                <h4>HTML Introduction</h4>
                <p>
                    First of all , what is HTML ? <br />
                    HTML is the standard markup language to create websites. <br />
                    It stands for HyperText Markup Language. <br />
                    HTML describes how a website should be displayed,  it's a serie of elements.
                </p>
                <h4>HTML Elements</h4>
                <p>
                    An HTML element is defined by its start tag , its content and its end tag. <br />
                    What we call an HTML element is everything between the start tag and the end tag. <br />
                </p>
                <img src="./src/assets/HTML_Intro.jpg" alt="element_example" />
                <p>
                    Examples of tagnames :
                </p>
                <img src="./src/assets/Tag_examples.jpg" alt="tag_example" />
                <h4>Web Browser</h4>
                <p>
                    Web browsers are used to read HTML documents and display them properly without showing the tags <br />
                    Example of browsers : Safari, Chrome , Firefox , Opera.
                </p>
                <h4>HTML Page Structure</h4>
                <p>This is an example of a basic HTML Page structure</p>
                <img src="./src/assets/HTML_Structure.jpg" alt="structure_example" />

            </div>
            <h4>Quiz</h4>
            <div className="quizLesson">
                <p>quiz</p>
            </div>
            <div className="menuRessourcesVideo">
                <h4>Ressources Videos</h4>
                <div className="ressourceVideo">
                    <iframe src="https://www.youtube.com/embed/it1rTvBcfRg?si=ojcThi5WT5ToKVpg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
                </div>
            </div>
        </div>
    )
}

export default Lesson;