#!/usr/bin/env node
// tslint:disable-next-line
require('tsconfig-paths/register');
import { createTestFiles, archiveTestFiles, checkArchiveTestFiles, cleanUpTesting } from '@drivers/test.driver';

createTestFiles();
archiveTestFiles();
checkArchiveTestFiles();
cleanUpTesting();
