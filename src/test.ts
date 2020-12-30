#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');
import { createTestFiles, archiveTestFiles, cleanUpTesting } from '@drivers/test.driver';

createTestFiles();
archiveTestFiles();
cleanUpTesting();
