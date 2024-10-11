#!/usr/bin/env node

import { cloneRepo } from '../lib/cloneRepo.js';
import { logSuccess, logError } from '../lib/logger.js';

const repoUrl = "https://github.com/LuthfiSad/express-template-luthfi.git"; // URL repositori Anda
const projectName = "expressts-luthfi"; // Nama folder proyek

console.log('======================================');
console.log(' Welcome to expressts-luthfi! ');
console.log('======================================');
console.log('This will create a new Express project for you.');
console.log('Please wait while we set everything up...');

cloneRepo(repoUrl, projectName)
  .then(() => {
    logSuccess('\n======================================');
    logSuccess('       Setup completed successfully!   ');
    logSuccess('          Happy Coding : ]            ');
    logSuccess('======================================');
  })
  .catch((err) => logError("Error cloning repository:", err));
