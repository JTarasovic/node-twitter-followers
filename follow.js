var followers = require('./followers');

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: TWITTER_CON_KEY,
    consumerSecret: TWITTER_CON_SECRET,
    callback: null
});

var add = function(el, ind, arr){
  twitter.friendships(
    'create',
    {
      user_id: el,
      follow: true
    },
    TWITTER_ACC_TOKEN,
    TWITTER_ACC_SECRET,
    function(err, data, resp){
      console.error(arguments)
    }
  )
}

followers.ids.forEach(add);
