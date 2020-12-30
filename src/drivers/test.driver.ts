import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { createOneBackup } from '@drivers/backup.driver';

const testFolder = path.join(__dirname, '../../test');
const root = path.join(__dirname, '../../');
const outputFolder = path.join(root, 'testarchive');
const testArchiveName = 'testarchive.tar.gz';
const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n';

export const createTestFiles = () => {
  if (!fs.existsSync(testFolder)) {
    fs.mkdirSync(testFolder);
  }

  for (let i = 0; i < 10; i++) {
    const filePath = path.join(testFolder, `test${i}.txt`);
    fs.writeFileSync(filePath, testText);
  }
}

export const archiveTestFiles = () => {
  createOneBackup(path.join(root, testArchiveName), testFolder, {sync: true});
}

export const checkArchiveTestFiles = () => {
  const archive = path.join(root, testArchiveName);
  fs.mkdirSync(outputFolder);
  const stdout = execSync(`tar -xvzf ${archive} -C ${outputFolder}`);

  const unzippedTestFolder = path.join(outputFolder, 'test');
  fs.readdirSync(unzippedTestFolder).forEach((file) => {
    const contents = fs.readFileSync(path.join(unzippedTestFolder, file)).toString('utf8');
    if (contents != testText) {
      console.log(`Test for ${file} - failed, aborting now.`);
      return;
    }

    console.log(`Test for ${file} - okay`);
  });

  console.log('Test suite success. Cleaning up now...');
}

export const cleanUpTesting = () => {
  fs.rmdirSync(testFolder, { recursive: true});
  fs.rmdirSync(outputFolder, { recursive: true});
  fs.unlinkSync(path.join(root, testArchiveName));
}
