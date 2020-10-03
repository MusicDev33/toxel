#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';

import { getAllDiskUsage, getSingleDiskUsage } from '@drivers/df.driver';
import { createOneBackup } from '@drivers/backup.driver';
import { createDateFileName, createTimeFileName } from '@util/datename';

const diskUsage = getAllDiskUsage('-H');
const du = getSingleDiskUsage('/home');

const pathName = path.join(__dirname, '../test');
const fileName = createTimeFileName('weekly.tar.gz');
const bu = createOneBackup(`${pathName}/${fileName}`, `${pathName}`);
console.log(__dirname);
fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify(du, null, 2));
