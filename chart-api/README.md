Percona Front-End Developer Challenge
=====================================

Percona Cloud Tools uses PHP, [Symfony](http://symfony.com/), and [AngularJS](http://angularjs.org/)
for the front end web app (https://cloud.percona.com).

This sample REST API uses [Node.js](http://nodejs.org/) to run a local server with a few sample routes.

Using this API, create an angular.js app that:
* queries the API to fetch the data
* creates graphs (can use any library of choice) with the sample data
* creates a chart selector to display only graphs for the specific chart or all charts
* create a date selector to display graphs for the specific dates
Also, be sure the test your code.

We grade results based on:

1. Overall functionality and usability (including reliability, efficiency, etc.)
2. Code design (including style, organization, testing, etc.)
3. UX/UI design (no fancy graphics required though)

This task should take about 10 hours or less for an expert JS/AngularJS developer.  You will be paid for you time.

The rest of this readme helps you get set up and running.  Since this is a test, we can't give you answers,
but if some part of the task, this readme, the sample code or data, etc. is not clear, then please email daniel@percona.com.

1. Install Node.js
------------------

As an expert JavaScript developer, we trust that you are already familar with (and probably already running) Node.js.  If not, go to http://nodejs.org to learn how to install it.

2. Set up the application
-------------------------

Run to install dependencies:

```sh
$ npm install
```

3. Start the server
-------------------

Run to start the server:

```sh
$ node app/server.js
Listening on port 3000...
```

4. Test the API
---------------

Browse to http://localhost:3000/charts.  You should get a sample JSON response.

All REST routes are GET (no POST, PUT, etc are implemented). Run the following curl commands from the shell:

`$ curl -X GET http://localhost:3000/charts`
Returns a list of available charts

`$ curl -X GET http://localhost:3000/charts/3`
id : int
Returns info about the specific chart id

`$ curl -X GET http://localhost:3000/charts/3/graphs`
Returns an array of series for each day (if data is available)

`$ curl -X GET http://localhost:3000/charts/3/graphs/2013-02-01`
Returns an array of data for the specific date

5. Observations
---------------

Only the first days of each month contains data (01 to 07). The data for each month is the same. Don't worry, it's just some sample data for testing purposes.

6. When you're done
-------------------

When you're done, please tarball your app and email it to daniel@percona.com including anything you
would like us to know or to look at specifically.  Thanks in advance for your time and work!
