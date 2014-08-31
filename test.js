var Twit = require('twit')

var T=  new Twit({
    consumer_key:         'Agw6RFrE0gYPTZG8GPg2Og'
    , consumer_secret:      'DohfxkovRrDxsBLVZ1oy7xxjBn2BAswtpCvKhye8'
    , access_token:         '2246561840-oSrh5EjXLcPiDa0tmqJBySEjzCt00M9nZOGd5g2'
    , access_token_secret:  'jJUVK4HqWjKicrd0tY5UFMypbEZRZDV8dQKDq2StkWnto'})


//T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//    console.log(data)
//})


//T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
//    console.log(data)
//})

//T.get('followers/ids', { screen_name: 'TeemoOnTheRun' },  function (err, data, response) {
//    console.log(data)
//})
T.get('friends/ids', { screen_name: 'TeemoOnTheRun' },  function (err, data, response) {
    console.log(data)
})

//T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
//    console.log(data)
//})
//
//T.post('statuses/destroy/:id', { id: '343360866131001345' }, function (err, data, response) {
//    console.log(data)
//})

//T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
//    console.log(data)
//})

//var stream = T.stream('statuses/sample')
//
//stream.on('tweet', function (tweet) {
//    console.log(tweet)
//})