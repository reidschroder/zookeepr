const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();


//parse incoming string or array
app.use(express.urlencoded({ extend: true}));
// parse incoming json data
app.use(express.json());



app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});