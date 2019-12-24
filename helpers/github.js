const request = require('request');
const config = require('../config.js');
//  what is request???? try to find solution
let getReposByUsername = (username,callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    //  from the data sent bu the APi we can see that the url is designed like this
    url:`https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options,(err,res,body)){
    let data = JSON.parse(body)
    console.log(data);
  }

}

module.exports.getReposByUsername = getReposByUsername;