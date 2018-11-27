// Get dependencies
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const thing = require('./models/thing');
const dbConnection = require('./models/index');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// Define middleware here
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

require('./routes/thingController')(app, thing);
require('./routes/api')(app);
require('./routes/htmlController')(app, path);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));