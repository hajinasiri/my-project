var GITHUB_USER = "hajinasiri";
var GITHUB_TOKEN = "35e9aae1b4a51c485662c41165537e7cc6077e5e";

var request = require('request');
var fs = require('fs');
var owner = process.argv[2];
var repo = process.argv[3];
//for example owner = repo = jquery

console.log('Welcome to the GitHub Avatar Downloader!');
function getRepoContributors(repoOwner, repoName, cb) {
  // cb is the callback function
  //creating request URL
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  //creating option object to get rid of the forbidden access error
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  };
  request.get(options, function(err, response, body){
    //returning the body of the response in JSON format
    return cb(JSON.parse(body));

  });
}
function downloadImageByURL(body) {
  // ...

  body.forEach(function(item){
    var filePath = "./avatars/" + item.login + ".jpg";
    var url = item.avatar_url;
    request.get(url)
    // if error, it will show erro
      .on('error', function (err) {
        throw err;
      })
      .pipe(fs.createWriteStream(filePath));
    console.log(item.login + "'s photo download completed!");
  });
}

if(owner && repo){
  getRepoContributors(owner, repo, downloadImageByURL);
}else{
  console.log("command should be in the format of node download_avatars.js <owner> <repo>");
}

