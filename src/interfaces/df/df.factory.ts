import { IDFOutput } from '@interfaces/df/df.interface';
import { DFBuilder } from '@interfaces/df/df.builder';

export class DFFactory {
  constructor() {

  }

  createDFOutput(input: Map<string, string>): IDFOutput {
    return new DFBuilder(input).setFileSystem().setSize().setUsage().setMount().build();
  }
}
