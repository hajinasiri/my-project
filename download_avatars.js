var GITHUB_USER = "hajinasiri";
var GITHUB_TOKEN = "35e9aae1b4a51c485662c41165537e7cc6077e5e";

var request = require('request');
var fs = require('fs');
var owner = process.argv[2];
var repo = process.argv[3];
if(repo && owner){
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
    request.get(options,function(err, response, body){
      // console.log(JSON.parse(body));
      // console.log(err,body);
      return cb(JSON.parse(body));

    });
  }
  //owner = repo = jquery

  getRepoContributors(owner, repo,downloadImageByURL);



  function downloadImageByURL(body) {
    // ...

    body.forEach(function(item){
      var filePath = "./avatars/" + item.login + ".jpg";
      var url = item.avatar_url;
      request.get(url)               // Note 1
         .on('error', function (err) {                                   // Note 2
           throw err;
         })
         .on('response', function (response) {                           // Note 3
         })
         .pipe(fs.createWriteStream(filePath));
         console.log(item.login + "'s photo download completed!");
    });
  }
}else{
  console.log("command should be in the format of node download_avatars.js <owner> <repo>")
}


