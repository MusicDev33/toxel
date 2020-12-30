import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { createOneBackup } from '@drivers/backup.driver';

const testFolder = path.join(__dirname, '../../test');
const root = path.join(__dirname, '../../');

export const createTestFiles = () => {
  const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n';

  if (!fs.existsSync(testFolder)){
    fs.mkdirSync(testFolder);
}

  for (let i = 0; i < 10; i++) {
    const filePath = path.join(testFolder, `test${i}.txt`);
    fs.writeFileSync(filePath, testText);
  }
}

export const archiveTestFiles = () => {
  createOneBackup(path.join(root, 'test.tar.gz'), testFolder, {sync: true});
}

export const cleanUpTesting = () => {
  fs.rmdirSync(testFolder, { recursive: true});
}
