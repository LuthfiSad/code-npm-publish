import simpleGit from "simple-git";
import path from "path";

export const cloneRepo = async (repoUrl, projectName) => {
  const git = simpleGit();
  const destination = path.join(process.cwd(), projectName);

  try {
    await git.clone(repoUrl, destination);
  } catch (err) {
    throw new Error(err);
  }
};
