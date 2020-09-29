import { execSync } from 'child_process';
import { dfParse } from '@parse/df.parser';

import { IDFOutput } from '@interfaces/df/df.interface';

export const getSingleDiskUsage = (drive: string, options?: string): IDFOutput | null => {

  const command = options ? `df ${options} ${drive}` : `df ${drive}`;

  try {
    const result = execSync(command).toString('utf8');
    return dfParse(result, options ?? '')[0];
  } catch {
    return null;
  }

}

export const getAllDiskUsage = (options?: string): IDFOutput[] | null => {

  const command = options ? `df ${options}` : `df`;

  try {
    const results = execSync(command).toString('utf8');
    return dfParse(results, options ?? '');
  } catch {
    return null;
  }
}
