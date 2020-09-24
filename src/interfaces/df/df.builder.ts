import { IDFOutput } from './df.interface';

export class DFBuilder implements IDFOutput {
  fileSystem: string;
  size = 0;
  usedSpace = 0;
  availableSpace = 0;
  usePercentage = 0;
  mountName = '';

  constructor(fSystem: string) {
    this.fileSystem = fSystem;
  }


}
