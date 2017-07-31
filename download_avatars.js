var GITHUB_USER = "hajinasiri";
var GITHUB_TOKEN = "35e9aae1b4a51c485662c41165537e7cc6077e5e";

var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');
function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
var options = {
  url: requestURL,
  headers: {
    'User-Agent': "GitHub Avatar Downloader - Student Project"
  }
};
  console.log(requestURL)
  request.get(options,function(err, response, body){
    return cb(err, JSON.parse(body));
  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  result.forEach(function(item){
    console.log(item.avatar_url);
  });
});