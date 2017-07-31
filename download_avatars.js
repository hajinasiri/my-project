var GITHUB_USER = "hajinasiri";
var GITHUB_TOKEN = "35e9aae1b4a51c485662c41165537e7cc6077e5e";

var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);
  request.get("https://github.com/nodejs/node")               // Note 1
       .on('error', function (err) {                                   // Note 2
         // cb(err,null);
       })
       .on('response', function (response) {                           // Note 3
        // cb(null,response);
       })
}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});