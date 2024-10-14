import simpleGit from "simple-git";
import path from "path";
import fs from "fs";

export const cloneRepo = async (repoUrl, projectName) => {
  const git = simpleGit();
  
  const destination = projectName === process.cwd() ? projectName : path.join(process.cwd(), projectName);

  if (projectName !== process.cwd() && !fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  try {
    await git.clone(repoUrl, destination);

    // Hapus remote origin
    await git.cwd(destination).raw(['remote', 'remove', 'origin']);
  } catch (err) {
    throw new Error(err);
  }
};
