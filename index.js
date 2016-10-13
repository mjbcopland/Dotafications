var config = require('./config.json');

var d2gsi = require('dota2-gsi');
var server = new d2gsi();

var PushBullet = require('pushbullet');
var pusher = new PushBullet(config.key);

server.events.on('newclient', function (client) {
  client.on('hero:stunned', function (stunned) {
    if (stunned) pusher.note({}, 'Stunned!', 'You were stunned', function(error, response) {});
  });
});