const mygroup = require('../models/mygroup');

function getIndex(req, res) {
  res.json(mygroup);
}

module.exports = { getIndex };
