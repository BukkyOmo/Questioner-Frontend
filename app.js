const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.resolve(__dirname, './build');
  const filePath = path.join(buildPath, 'index.html');

  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(filePath);
  });
}

const port = 8080 || process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`App already started on port ${port}`);
});
