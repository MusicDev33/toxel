import { exec, execSync } from 'child_process';

type ArchiveOptions = {
  sync: boolean
}

// archiveName - Name of the new archive you want to create
// source - The directory you want to create a backup of
export const createOneBackup = (archiveName: string, source: string, options?: ArchiveOptions) => {
  const archiveWorkingArr = source.split('/');
  const dirName = archiveWorkingArr.pop();
  const workingDir = archiveWorkingArr.join('/');
  console.log(`Current working directory: ${workingDir}`);
  console.log(`Archive Location: ${archiveName}`);
  console.log(`Copying data from: ${source}`);
  console.log(`Final Command: tar -cvzf ${archiveName} ${source}`);

  if (options && options.sync) {
    const stdout = execSync(`cd ${workingDir} && tar -cvzf ${archiveName} ${dirName}`);
    console.log(stdout.toString('utf8'));
    return;
  }

  exec(`cd ${workingDir} && tar -cvzf ${archiveName} ${dirName}`, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
}

export const createBackups = (archiveNames: {[key: string]: string}, sources: string[]) => {

}
