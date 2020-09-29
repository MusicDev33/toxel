import { IDFOutput } from '@interfaces/df/df.interface';
import { DFMap } from '@interfaces/maps/df.map';
import { DFFactory } from '@interfaces/df/df.factory';

export const dfParse = (input: string, options?: string): IDFOutput[] => {
  let humanReadable = false;

  if (options && options.includes('-H')) {
    humanReadable = true;
  }

  const rows = parseRows(input);
  const dfFactory = new DFFactory();

  let keys: string[];
  let keyMap: Map<number, string> = new Map();
  const parsedData: IDFOutput[] = [];

  // This is backwards, I know...
  keys = rows[0].split(' ');
  keys.forEach((key, index) => {
    keyMap.set(index, key);
  });
  rows.shift();

  rows.forEach((row) => {
    const values = row.split(' ');
    const newDFOutput: Map<string, string> = new Map();
    values.forEach((value, index) => {
      const dfMapKey = keyMap.get(index);
      const dfMapRes = dfMapKey && DFMap.get(dfMapKey);

      if (dfMapRes) {
        newDFOutput.set(dfMapRes, value);
      }
    });

    parsedData.push(dfFactory.createDFOutput(newDFOutput, {humanReadable}));
  });

  return parsedData;
}

const parseRows = (input: string): string[] => {
  const lines = input.split(/\r?\n/);
  const newLines: string[] = [];

  lines.forEach((line) => {
    // Collapse spaces
    const newLine = line.replace(/\s+/g, ' ');

    if (newLine.length) {
      newLines.push(newLine);
    }
  });

  return newLines;
}
