import { IConf } from '@interfaces/conf/conf.interface';

export const confParse = (confOutput: string): IConf[] => {
  const lines = confOutput.split(/\r?\n/);

  let confArray: IConf[] = [];

  lines.forEach((line) => {
    if (line.length) {
      const splitLine = line.split(':');
      const newConf: IConf = {
        cronString: splitLine[0],
        path: splitLine[1],
        archiveLocation: splitLine[2]
      }

      confArray.push(newConf);
    }
  });

  return confArray;
}
