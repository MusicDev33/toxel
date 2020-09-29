import { IDFOutput } from '@interfaces/df/df.interface';
import { DFBuilder } from '@interfaces/df/df.builder';

export class DFFactory {
  constructor() {

  }

  createDFOutput(input: Map<string, string>, options?: {humanReadable: boolean}): IDFOutput {
    const humanReadable = options ? options.humanReadable : false;
    return new DFBuilder(input).setFileSystem().setSize(humanReadable).setUsage(humanReadable).setMount().build();
  }
}
