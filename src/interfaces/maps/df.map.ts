// TODO: Figure out how the hell to map columns in a type-safe manner

// EDIT: So I did it and wow, this is some serious wizardry going on here,
// I barely understand what's going on. Good type safety practice though!

// EDIT 2: This is going to be an adapter of sorts for now until I figure out type safety
// for this problem. At the moment, it's a bit of an unnecessary step, but I'd like to figure this problem
// out sometime.
export enum DFEnum {
  fileSystem = 'fileSystem',
  size = 'size',
  usedSpace = 'usedSpace',
  availableSpace = 'availableSpace',
  usePercentage = 'usePercentage',
  mountName = 'mountName'
}

export const DFMap: Map<string, DFEnum> = new Map([
  [ 'Filesystem', DFEnum.fileSystem ],
  [ 'Size', DFEnum.size ],
  [ 'Used', DFEnum.usedSpace ],
  [ 'Avail', DFEnum.availableSpace ],
  [ 'Use%', DFEnum.usePercentage ],
  [ 'Mounted', DFEnum.mountName ]
]);
