Percona Front-End Developer Challenge
=====================================

Percona Cloud Tools uses PHP, [Symfony](http://symfony.com/), and [AngularJS](http://angularjs.org/)
for the front end web app (https://cloud.percona.com).

If you already know Symfony and/or AngularJS then you have an advantage, but knowing these technologies
is not required for being hired.  What we really want to know is how you learn, program, and deliver a
product.  Therefore, we created this tech challenge to allow you to demonstrate your skills.
    
The minimal Symfony web app in this repo has a single page which shows and agent's log.  The page is
intentionally bad: it simply prints every log entry.  **Your task is to make this page great**.

You must use PHP and Symfony, but otherwise you are free to use whatever you want to do your best work.
For example, if you're more comfortable with Backbone.js, you can use it.  What matters is the product
you deliver.  We grade results based on:

1. Overall functionality and usability (including reliability, efficiency, etc.)
2. Code design (including style, organization, testing, etc.)
3. UX/UI design (no fancy graphics required though)
4. Delivery time (how fast you finish)

This task should take about 20-30 hours (for which you will be paid).

The rest of this readme helps you get set up and running.  A lot of Symfony scaffolding has already been
created for you.  You will need to spend some time at the start learning Symfony basics, but most of your
time should be spent implementing your best ideas for the agent log browser page.

Since this is a test, we can't give you answers about Symfony or other technologies, but if some part
of the task, this readme, the sample code or data, etc. is not clear, then please email daniel@percona.com
or ismael.ambrosi@percona.com.

1) Development environment
--------------------------

First thing you need is a suitable development environment:

* Ubuntu 12.04 (highly recommended)
* PHP 5.3 (required)
* Apache2 (or any web server you want)
* MySQL 5.5 (or newer)

If you're not already running a Linxu distro, this should be easy to set up with [Vagrant](http://www.vagrantup.com/).
You can use Mac OS X if you want.

**We will not help you set up your environment**.  We have an ops team, but developers are also expected
to have basic sysadmin skills.  There's one exception: Symfony.  We will help you set up Symfony if you
have problems.  This is covered in the next section.

2) Symfony
----------

The Symfony app is in this directory, `front-end-challenge/`.  Start by installing [Composer](https://getcomposer.org/):

    curl -s https://getcomposer.org/installer | php

Then run:

    php composer.phar install

This will install the app's dependencies.

Now we need create an Apache vhost and fake DSN entry for the app which is `cloud.percona.dev`.

Add a line to your `/etc/hosts` file like:

    192.168.0.1	cloud.percona.dev

The IP depends on how and where your environment is set up.  If local, then change the IP to 127.0.0.1.
If running a Vagrant virtual box, port 8080 should be forwarded to port 80 in the virtual box, so you
will need to add `:8080` to all URLs.

`setup/apache-vhost.conf` is a sample Apache vhost conf file with docroot `/var/www/cloud.percona.dev/web`.
You can symlink `/var/www/cloud.percona.dev/` to `web-dev/front-end-challenge` because the repo also
has a `web/` directory.  Then, in many distros, you copy the sample Apache vhost conf to
`/etc/apache2/sites-available/` (give it a different name if you want), symlink to it in
`/etc/apache2/sites-enabled/` and reload Apache.  If everything works, you should be able to access
`http://cloud.percona.dev/` from your web browser and get a "no route found" error from Symfony.

3) MySQL
--------

Symfony uses [Doctrine](http://www.doctrine-project.org/) to access the database.  In MySQL create a database
called `percona`, then create a user with username and password `percona` with all privs on `percona.*`.
These are the values Doctrine uses to connect to the database, but you can change them in
`app/config/parameters.yml`.

Load the sample data:

    mysql percona < setup/data.sql
    
The `percona` table should have two tables: `agents` and `agent_log`.  Familiarize yourself with their
structures.

4) Learn Symfony basics
-----------------------

Symfony is a mature and therefore slightly complex web framework.  It has many "parts" and conventions
that you must learn.  Therefore, you should read the [Symfony book](http://symfony.com/doc/2.3/book/index.html).
You can skip chapter "Databases and Propel", and chapters "HTTP Cache" and later.  The first 8 chapters
are the most important.

While you're reading, remember that a lot of scaffolding has already be created and configured for you.
In particular, there is one route/page:

    http://cloud.percona.dev/agents/7ba6c7ac-98dc-11e3-ac6d-a41f727c7f19/log
    
This is the page you need to fix.  Since this task should take about 20-30 hours, you might want to spend
the first few hours reading this book.  Then look around the repo and see where things are and how
everything ties together.  Start coding and improving that page when you're ready!

5) Hints and ideas
------------------

This task is intentionally vauge and open-ended because every developer is eventually expected to become
autonomous, able to deliver a good product with minimal input from users (and also able to implement
specific user feedback when available), taking into account many considerations: UX/UI, code
maintainability and testability, response time (web page, database, etc.), etc.  So there's no right or
wrong; there are no must-have features (other than it works).

Nonetheless, here are some things to think about:

* A real `agent_log` has tens of thousands of entries (rows)
* A real `agent_log` has logs for multiple agents
* Sometimes user only wants latest log entries, other times user wants specific time range
* Sometimes user wants to see only warnings or errors
* New log entries are always being written
* `agent_log.level` is same as http://en.wikipedia.org/wiki/Syslog#Severity_levels, but user doesn't know this
* An agent may be deleted (`agents.deleted` is not null), but user may still want to see its log

6) When you're done
-------------------

When you're done, please tarball your app and email it to daniel@percona.com including anything you
would like us to know or to look at specifically.  Thanks in advance for your time and work!
