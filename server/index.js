const express = require('express');
const path = require('path');
const app = express();
const port = 1000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use("/users", require('./routes/users'));
app.use("/vacations", require('./routes/vacations'));
app.use("/likes", require('./routes/likes'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`up and running on ${port}`));