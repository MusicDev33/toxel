#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';

import { getAllDiskUsage, getSingleDiskUsage } from '@drivers/df.driver';

const diskUsage = getAllDiskUsage('-H');
console.log(__dirname);
fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify(diskUsage, null, 2));
