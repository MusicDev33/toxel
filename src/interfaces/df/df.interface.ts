export interface IDFOutput {
  fileSystem: string;
  
  // Size in bytes (1024)
  size: number;
  usedSpace: number;
  availableSpace: number;
  usePercentage: number;
  mountName: string;
}
