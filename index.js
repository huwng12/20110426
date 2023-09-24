const express = require('express');
const app = express();
const port = 5000;

const indexRoute = require('./routes/indexRoute');
const messageRoute = require('./routes/messageRoute');
const MSSVRoute = require('./routes/mssvRoute');

app.use(express.json());
app.use('/', indexRoute);
app.use('/message', messageRoute);
app.use('/:id', MSSVRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
