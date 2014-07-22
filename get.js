var fs = require('fs');
var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
		consumerKey: TWITTER_CON_KEY,
		consumerSecret: TWITTER_CON_SECRET,
		callback: null
	});

twitter.friends(
  'ids',
  {
    screen_name: TWITTER_SCREEN_NAME,
    stringify_ids: true,
    count: 5000
  },
  TWITTER_ACC_TOKEN,
  TWITTER_ACC_SECRET,
  function(err, data, resp){
    fs.writeFileSync('followers.json',JSON.stringify(data));
  }
)
