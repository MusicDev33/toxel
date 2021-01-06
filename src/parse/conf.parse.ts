import { IConf } from '@interfaces/conf/conf.interface';

export const confParse = (confOutput: string): IConf[] => {
  const lines = confOutput.split(/\r?\n/);

  let confArray: IConf[] = [];

  lines.forEach((line) => {
    if (line.length) {
      const splitLine = line.split(':');
      const path = splitLine[1];
      const archiveName = path.split('/').pop();
      const newConf: IConf = {
        cronString: splitLine[0],
        path,
        archiveLocation: splitLine[2],
        archiveName

      }

      confArray.push(newConf);
    }
  });

  return confArray;
}
