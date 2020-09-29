import { exec } from 'child_process';

// archiveName - Name of the new archive you want to create
// source - The directory you want to create a backup of
export const createOneBackup = (archiveName: string, source: string) => {
  exec(`tar -cvzf ${archiveName} ${source}`, (err, stdout, stderr) => {
    console.log(stdout);
  });
}

export const createBackups = (archiveNames: {[key: string]: string}, sources: string[]) => {
  
}
