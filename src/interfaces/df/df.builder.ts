import { IDFOutput } from './df.interface';
import { DFEnum } from '@interfaces/maps/df.map';

export class DFBuilder {
  private fileSystem = '';
  private size = 0;
  private usedSpace = 0;
  private availableSpace = 0;
  private usePercentage = 0;
  private mountName = '';

  private starterOutput: Map<string, string>;

  constructor(input: Map<string, string>) {
    this.starterOutput = input;
  }

  setFileSystem() {
    this.fileSystem = this.starterOutput.get(DFEnum.fileSystem)!;
    return this;
  }

  // This is fine because generally, JS's max safe number size is 9007199254740992
  // Which, in bytes, is about 9 petabytes.
  private sizeToBytes(sizeString: string): number {
    const sizeDict: {[size: string]: number} = {
      'K': 1000,
      'M': 1000 ** 2,
      'G': 1000 ** 3,
      'T': 1000 ** 4,
      'P': 1000 ** 5
    }


  }
}
