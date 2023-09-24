const mygroup = require('../models/mygroup');

function getMessage(req, res) {
  const { id } = req.params;

  if (id) {
    const member = mygroup.find((item) => item.id === id);
    if (member) {
      res.json(member);
    } else {
      res.json({ error: 'Not valid' });
    }
  } else {
    const memberNames = mygroup.map((item) => item.name);
    const htmlList = memberNames.map((name) => `<li>${name}</li>`).join('');
    const htmlResponse = `<html><body><ul>${htmlList}</ul></body></html>`;
    res.send(htmlResponse);
  }
}

module.exports = { getMessage };
