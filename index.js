const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes/countRoutes')(app);

const PORT = 5000;
app.listen(PORT);