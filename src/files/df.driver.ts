import { exec } from 'child_process';
import { dfParse } from '@parse/df.parser';

export const getDiskUsage = (drive: string) => {
  exec('df -H', (err, stdout, stderr) => {
    console.log(stdout);

    dfParse(stdout);
  });
}
