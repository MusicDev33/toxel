import { exec } from 'child_process';

// archiveName - Name of the new archive you want to create
// source - The directory you want to create a backup of
export const createOneBackup = (archiveName: string, source: string) => {
  const archiveWorkingArr = source.split('/');
  const dirName = archiveWorkingArr.pop();
  const workingDir = archiveWorkingArr.join('/');
  console.log(`Current working directory: ${workingDir}`);
  console.log(`Archive Location: ${archiveName}`);
  console.log(`Copying data from: ${source}`);
  console.log(`Final Command: tar -cvzf ${archiveName} ${source}`);
  exec(`cd ${workingDir} && tar -cvzf ${archiveName} ${dirName}`, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
}

export const createBackups = (archiveNames: {[key: string]: string}, sources: string[]) => {

}
