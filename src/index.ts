#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import { getDiskUsage } from '@files/df.driver';

getDiskUsage('/nas');
