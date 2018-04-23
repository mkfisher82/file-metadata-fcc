const express = require('express');
const multer = require('multer');
const path = require('path');

const upload = multer({ dest: './uploads/' });

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.post('/', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size });
});

app.listen(process.env.PORT || 3000);
