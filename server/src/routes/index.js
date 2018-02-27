const postNotes = require('./postNotes');
const getNotes = require('./getNotes');

module.exports = [].concat(
  getNotes,
  postNotes
);
