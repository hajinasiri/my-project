var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  request.get("https://github.com/nodejs/node")               // Note 1
       .on('error', function (err) {                                   // Note 2
         cb(err,null);
       })
       .on('response', function (response) {                           // Note 3
        cb(null,response);
       })
}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});