const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./routes');

app.use(cors({
    origin: 'https://nbastars.jcloud.jedlik.cloud',
}));
app.use(express.json());

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})