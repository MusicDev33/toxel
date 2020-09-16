import { exec } from 'child_process';

export const getDiskUsage = (drive: string) => {
  exec('df -h', (err, stdout, stderr) => {

  });
}
