import Title from "../../components/title/Title";
import TextContent from "../../components/text_content/TextContent";
import CodeEditor from "../../components/code_editor/CodeEditor";
import VideoSearch from "../../components/video_search/VideoSearch";
import Quiz from "../../components/quiz/Quiz";

import styles from "./gitPageStyle.module.css";

const gitCommands = [
  {
    command: "git init",
    description: "Initializes a new Git repository.",
    code: "git init",
  },
  {
    command: "git clone [url]",
    description: "Clones an existing repository via URL.",
    code: "git clone https://github.com/user/repo.git",
  },
  {
    command: "git add [file]",
    description: "Adds a file to the staging area.",
    code: "git add index.html",
  },
  {
    command: 'git commit -m "[message]"',
    description: "Saves files in the repository with a commit message.",
    code: 'git commit -m "Initial commit"',
  },
  {
    command: "git status",
    description:
      "Shows the state of the repository with modifications and staged files.",
    code: "git status",
  },
  {
    command: "git branch",
    description: "Lists all local branches of the depot.",
    code: "git branch",
  },
  {
    command: "git checkout [branch]",
    description: "Change branch.",
    code: "git checkout develop",
  },
  {
    command: "git merge [branch]",
    description: "Merges a branch into the active branch.",
    code: "git merge feature/new-feature",
  },
  {
    command: "git pull",
    description:
      "Retrieves and downloads content from the remote repository, and updates the local repository to match this content.",
    code: "git pull origin main",
  },
  {
    command: "git push",
    description: "Sends local changes to the specified remote branch.",
    code: "git push origin main",
  },
  {
    command: "git fetch",
    description:
      "Download commits, files and references from a remote repository.",
    code: "git fetch origin",
  },
  {
    command: "git log",
    description: "Shows the commits history for the current branch.",
    code: "git log",
  },
  {
    command: "git stash",
    description: "Sets aside uncommitted modifications.",
    code: "git stash",
  },
  {
    command: "git stash pop",
    description: "Applies the changes you've set aside.",
    code: "git stash pop",
  },
  {
    command: "git reset [file]",
    description: "Removes the file from the staging area.",
    code: "git reset index.html",
  },
  {
    command: "git rebase [branch]",
    description: "Applies modifications from one branch to another.",
    code: "git rebase main",
  },
];

const questions = [
  {
    questionText: "What is the Git Command to stage file modifications ?",
    answerOptions: [
      { answerText: "git add", isCorrect: true },
      { answerText: "git push", isCorrect: false },
      { answerText: "git commit -v", isCorrect: false },
      { answerText: "git cherry pick", isCorrect: false },
    ],
  },
  {
    questionText:
      "All my change are done what is the git command to send it to the git repository  ?",
    answerOptions: [
      { answerText: "git add", isCorrect: false },
      { answerText: "git push", isCorrect: true },
      { answerText: "git commit -v", isCorrect: false },
      { answerText: "git cherry pick", isCorrect: false },
    ],
  },
  {
    questionText:
      "How to change locally the branch I'm working on ?",
    answerOptions: [
      { answerText: "git branch", isCorrect: false },
      { answerText: "git push", isCorrect: false },
      { answerText: "git checkout", isCorrect: true },
      { answerText: "git commit", isCorrect: false },
    ],
  },
  {
    questionText:
      "How to unstage a changement in my file",
    answerOptions: [
      { answerText: "git rm", isCorrect: false },
      { answerText: "git pull", isCorrect: false },
      { answerText: "git stash", isCorrect: false },
      { answerText: "git reset", isCorrect: true },
    ],
  },
];

const videoIds = ["x1bfcgl", "xf22vs"];

export default function GitPage() {
  return (
    <div className={styles.gitPage}>
      <Title level="2" title="Introduction à Git" />
      <TextContent text="Git is a distributed version control system, used to track changes in files and coordinate the work that multiple people do on shared files." />
      {gitCommands.map(({ command, description, code }) => (
        <div key={command}>
          <Title level="3" title={command} />
          <TextContent text={description} />
          <CodeEditor language="bash" codeString={code} />
        </div>
      ))}
      <Quiz questions={questions} />
      <Title level="4" title="Ressources Videos" />
      <VideoSearch videoIds={videoIds} />
    </div>
  );
}
