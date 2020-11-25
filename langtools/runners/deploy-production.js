#!/usr/bin/env node

var FtpDeploy = require('ftp-deploy');

var ftpDeploy = new FtpDeploy();

var FTP_HOST = process.argv[2] || '';
var FTP_PORT = process.argv[3] || '';
var FTP_USER = process.argv[4] || '';
var FTP_PASS = process.argv[5] || '';

if(!FTP_HOST || !FTP_PORT || !FTP_USER || !FTP_PASS) throw "Not enough config to deploy";

var config = {
  username: FTP_USER,
  password: FTP_PASS,
  host: FTP_HOST,
  port: FTP_PORT,
  localRoot: './',
  remoteRoot: "/domains/domain.name/",
  exclude: ['.git', '.gitignore', '.gitmodules', 'public_html/uploads/*', 'runners', 'node_modules', 'vendor']
}

ftpDeploy.deploy(config, function(err) {
    if (err) throw err;
    else console.log('finished');
});
