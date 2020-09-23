import { IDFOutput } from './df.interface';

export abstract class DFFactory {

  public abstract createDFOutput(): IDFOutput;
}
// use builder pattern
class ConcreteDFFactory extends DFFactory {

  public createDFOutput(): IDFOutput {

  }
}
