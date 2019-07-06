const user = require('./user/user.service.js');
const songs = require('./songs/songs.service.js');
const stores = require('./stores/stores.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(songs);
  app.configure(stores);
};
