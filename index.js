const express = require('express');
const app = express();
const PORT = process.env.PORT || 3080;

app.get('/', (req, res) => {
  res.send('Hello from Coolify 👋 | this is automatical deployment system check 1234');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
