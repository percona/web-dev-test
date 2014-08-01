Percona AngularJS Developer Test
================================

Percona Cloud Tools uses [AngularJS](http://angularjs.org/) for the front end web app (https://cloud.percona.com).

This repo contains a small REST API that uses [Node.js](http://nodejs.org/) to run a local server
with a few sample routes.  Using this API, create an angular.js app that lets the user...

* select one or more charts to show
* select an aggregate function (mix, avg, or max) for each chart (applied to the series data for each day)
* select a single day to show without aggregation
* change the chart style from line to bar

Those are only the basic user requirements.  You can do more if time permits.  The technical requirements
are not specified because that's part of the test: to see what and how you implement as technical solutions
for these user requirements.  We grade results based on:

* Effective use of AngularJS (e.g. directives)
* Overall functionality and usability (including reliability, efficiency, etc.)
* Code design (including style, organization, testing, etc.)
* UX/UI design (no fancy graphics required though)

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
Returns info about the specific chart id

`$ curl -X GET http://localhost:3000/charts/3/data`
Returns an array of series for each day (if data is available)

`$ curl -X GET http://localhost:3000/charts/3/data/2013-02-01`
Returns an array of data for the specific date

5. Observations
---------------

Only the first days of each month contains data (01 to 07). The data for each month is the same. Don't worry, it's just some sample data for testing purposes.

6. When you're done
-------------------

When you're done, please tarball your app and email it to daniel@percona.com including anything you
would like us to know or to look at specifically.  Thanks in advance for your time and work!
