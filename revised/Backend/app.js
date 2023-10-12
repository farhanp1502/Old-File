const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

function readDataFromFile() {
  try {
    const data = fs.readFileSync('d.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const data = readDataFromFile();
  console.log('Received username:', username);
  console.log('Received password:', password);
  console.log('Data from JSON file:', data);
  
  if (!data) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  const user = data.users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Login failed' });
  }

  res.json({ message: 'Login successful', user });
});

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
