Percona Back-end Developer Challenge
====================================

Percona Cloud Tools uses [Go](https://golang.org/) for its agent and API. If you already know Go
then you have an advantage, but if not that's ok because Go is very easy to learn. It's also
very consistent, so what you learn and what you will see in real code is very similar.

More than langauge-specific skills, what we really want to know is how you find and solve problems.
Therefore, we created this tech challenge so you can demonstrate your skills.

This challegne is called "pid-file" because the goal is to find and solve a problem in the init
script (`percona-agent`) related to the PID file. We grade results based on:

1. Correctness (do you identify the problem)
2. Clarity (do you explain the problem clearly)
3. Solution (how you propose to solve the problem)
4. Delivery time (how fast you finish)

This task should take less than 2 hours. You will be paid for your time.

Since this is a test, we can't give you answers, but if some part of the task, this readme,
or the starter code is not clear, then please email us.

Hint
----

This isn't a trick. The init script (`percona-agent`) is an old version of the actual
init script used today. Like most init scripts, it simply starts and stops another program,
the `percona-agent` binary in this case (not included). That binary is also not a trick:
it has a `-pid` file option just like MySQL and other system daemons.  Therefore, you should
not need to debug the [percona-agent source code](https://github.com/percona/percona-agent),
but feel free to look if you like. The problem is completely contained within the init script.

When you're done
----------------

When you're done, please email us your findings and recommendations.
