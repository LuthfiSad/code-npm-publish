#!/usr/bin/env node


const cloneRepo = require('./lib/cloneRepo.js');
const { logError, logSuccess } = require('./lib/logger.js');

const repoUrl = "https://github.com/LuthfiSad/express-template-luthfi.git"; // URL repositori Anda
let projectName = process.argv[2] === "." ? process.cwd() : process.argv[2] || "expressts-luthfi"; // Nama folder proyek

console.log('======================================');
console.log('    Welcome to expressts-luthfi! ');
console.log('======================================');
console.log('This will create a new Express project for you.');
console.log('Please wait while we set everything up...');

cloneRepo(repoUrl, projectName)
  .then(() => {
    logSuccess('\n=======================================');
    logSuccess('       Setup completed successfully!   ');
    logSuccess('          Happy Coding : ]            ');
    logSuccess('=======================================');
  })
  .catch((err) => logError("Error cloning repository:", err));
