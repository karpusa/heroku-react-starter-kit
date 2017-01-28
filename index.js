const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});