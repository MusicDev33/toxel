import { IDFOutput } from '@interfaces/df/df.interface';
import { DFMap } from '@interfaces/maps/df.map';

export const dfParse = (input: string) => {

  const rows = parseRows(input);

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
    const newDFOutput: Map<string, any> = new Map();
    values.forEach((value, index) => {
      const dfMapKey = keyMap.get(index);
      const dfMapRes = dfMapKey && DFMap.get(dfMapKey);

      if (dfMapRes) {
        newDFOutput.set(dfMapRes, value);
      }
    });
    console.log(newDFOutput);
  });

  console.log(rows);
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
