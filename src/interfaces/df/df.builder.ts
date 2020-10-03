import { DFEnum } from '@interfaces/maps/df.map';
import { IDFOutput } from '@interfaces/df/df.interface';


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

  setSize(humanReadable: boolean) {
    const sizeToBeConverted = this.starterOutput.get(DFEnum.size);
    this.size = humanReadable ? this.sizeToBytes(sizeToBeConverted) : this.sizeFrom1k(sizeToBeConverted);
    return this;
  }

  setUsage(humanReadable: boolean) {
    const usageString = this.starterOutput.get(DFEnum.usedSpace);
    const availString = this.starterOutput.get(DFEnum.availableSpace);

    // console.log(usageString);

    this.usedSpace = humanReadable ? this.sizeToBytes(usageString) : this.sizeFrom1k(usageString);
    this.availableSpace = humanReadable ? this.sizeToBytes(availString) : this.sizeFrom1k(availString);

    this.usePercentage = parseInt(this.starterOutput.get(DFEnum.usePercentage)!.slice(0, -1));
    return this;
  }

  setMount() {
    this.mountName = this.starterOutput.get(DFEnum.mountName)!;

    return this;
  }

  build(): IDFOutput {
    const output: IDFOutput = {
      fileSystem: this.fileSystem,
      size: this.size,
      usedSpace: this.usedSpace,
      availableSpace: this.availableSpace,
      usePercentage: this.usePercentage,
      mountName: this.mountName
    }

    return output;
  }

  // This is fine because generally, JS's max safe number size is 9007199254740992
  // Which, in bytes, is about 9 petabytes.
  private sizeToBytes(sizeString: string | undefined): number {
    // console.log(`Input: ${sizeString}`);

    if (!sizeString) {
      return 0;
    }

    const oldSize = parseFloat(sizeString.slice(0, -1));

    if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(sizeString)) {
      return parseFloat(sizeString);
    }

    if (!oldSize) {
      return 0;
    }

    const sizeDict: {[size: string]: number} = {
      'K': 1000,
      'M': 1000 ** 2,
      'G': 1000 ** 3,
      'T': 1000 ** 4,
      'P': 1000 ** 5
    }

    const prefix = sizeString.slice(-1).toUpperCase();
    const byteSize = (oldSize * sizeDict[prefix]);

    // console.log(`Output: ${Math.trunc(byteSize)}`);

    return Math.trunc(byteSize);
  }

  private sizeFrom1k(sizeString: string | undefined): number {
    if (!sizeString || !parseInt(sizeString)) {
      return 0;
    }

    const result = parseInt(sizeString) * 1024;
    return result;
  }
}
