#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');
import { createTestFiles, cleanUpTesting } from '@drivers/test.driver';

createTestFiles();
cleanUpTesting();
