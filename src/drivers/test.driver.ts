import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const createTestFiles = () => {
  const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n';
  const testPath = path.join(__dirname, '../../');

  fs.writeFileSync(testPath, testText);
  
}
