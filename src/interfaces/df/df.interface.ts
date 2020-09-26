export interface IDFOutput {
  fileSystem: string;

  // Size in bytes
  size: number;
  usedSpace: number;
  availableSpace: number;
  usePercentage: number;
  mountName: string;
}
