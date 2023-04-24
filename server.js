const express = require("express");
// const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// // GET Route for API
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for HTML page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'add wildcard route - copy from mini project'))
// );

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});