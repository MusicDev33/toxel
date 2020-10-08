#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');

import fs from 'fs';
import path from 'path';

import { getAllDiskUsage, getSingleDiskUsage } from '@drivers/df.driver';
import { createOneBackup } from '@drivers/backup.driver';
import { createDateFileName, createTimeFileName } from '@util/datename';
import scheduler from 'node-schedule';
import { confParse } from '@parse/conf.parse';

const confOutput = fs.readFileSync(path.join(__dirname, '../.conf'), 'utf8');
const foldersToBackup = confParse(confOutput);

const diskUsage = getAllDiskUsage('-H');
const du = getSingleDiskUsage('/home');

const pathName = path.join(__dirname, '../test');
const fileName = createTimeFileName('weekly.tar.gz');
const bu = createOneBackup(`${pathName}/${fileName}`, pathName);

foldersToBackup.forEach((folderConf) => {
  scheduler.scheduleJob(folderConf.cronString, () => {
    if (!folderConf.archiveName) {
      createOneBackup(`${folderConf.archiveLocation}/${createTimeFileName('weekly.tar.gz')}`, folderConf.path);
    }
  });
});

console.log(__dirname);
fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify(du, null, 2));
