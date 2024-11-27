const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Route to handle phishing alerts
app.post('/phishing-alert', (req, res) => {
    console.log('Phishing Alert:', req.body.url);
    res.status(200).send({ message: 'Phishing alert received' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
