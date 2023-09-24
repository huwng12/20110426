const mygroup = require('../models/mygroup');

function addMSSV(req, res) {
  const { id } = req.params;
  const { body } = req;

  if (!isValidMSSV(id) || mygroup.find((item) => item.id === id)) {
    res.send('Not valid');
    return;
  }

  mygroup.push({ id, name: body.name });
  res.json(mygroup);
}

function getMSSV(req, res) {
    const { id } = req.params;
  
    if (id) {
      const member = mygroup.find((item) => item.id === id);
      if (member) {
        res.json(member);
      } else {
        res.json({ error: 'Not valid' });
      }
    } else {
      res.json({ error: 'Not valid' });
    }
  }

function isValidMSSV(id) {
  return true;
}

module.exports = { addMSSV, getMSSV };
