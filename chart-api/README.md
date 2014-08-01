This sample REST API uses node to run a local server with a few sample routes. It requires Node.js


1. Installing Node.js

Go to http://nodejs.org, and click the Install button.

Run the installer that you just downloaded. When the installer completes, a message indicates that Node was installed at /usr/local/bin/node and npm was installed at /usr/local/bin/npm.

At this point node.js is ready to use.


2. Get the application

Create a folder for the test:
$ mkdir ~\percona-test
$ cd ~\percona-test

Clone or download the zip from this repo: https://github.com/kamuslhv/percona-js-api-test/
Unzip to ~\percona-test\ or mv percona-js-api-test ~\percona-test


3. Set up the application
$ cd ~\percona-test\percona-js-api-test

Run to install dependencies:
$ npm install


4. Start the server

Run to start the server:
$ node app/server.js
Listening on port 3000...


5. Test API

Browse to http://localhost:3000/charts

You should get a sample REST response.


6. API methods examples

All implemented methods are GET (no POST, PUT, etc are implemented). You can run the following curl commands from the shell (rememeber to have the server running).

/charts
$ curl -X GET http://localhost:3000/charts
Returns a list of available charts

/charts:id
$ curl -X GET http://localhost:3000/charts/3
id : int
Returns info about the specific chart id

/charts:id/graphs
$ curl -X GET http://localhost:3000/charts/3/graphs
Returns an array of series for each day (if data is available)

/charts/:id/graphs/:date
$ curl -X GET http://localhost:3000/charts/3/graphs/2013-02-01
date :  date, YYYY-MM-DD
Returns an array of data for the specific date


7. Observations

Only the first days of each month contains data (01 to 07). The data for each month is the same. Don't worry, it's just some sample data for testing purposes :)
