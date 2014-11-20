Percona Back-end Go Developer Challenge
=======================================

Percona Cloud Tools uses [Go](https://golang.org/) for its agent and API. If you already know Go
then you have an advantage, but if not that's ok because Go is very easy to learn. It's also
very consistent, so what you learn and what you will see in real code is very similar.

More than langauge-specific skills, what we really want to know is how you learn, program, and
deliver a product.  Therefore, we created this tech challenge so you can demonstrate your skills.

This challegne is called "my-dsn" because the goal is to write a simple program that takes standard
MySQL command line options (`-user`, `-host`, etc.) as the input and returns a
[Go MySQL Driver DSN](https://github.com/go-sql-driver/mysql#dsn-data-source-name) as the output.
For example:
```go
$ my-dsn -user foo -pass bar -host 10.10.0.1
foo:bar@tcp(10.10.0.1:3306)/
```

The challenge is small and specific but not trivial. We grade results based on:

1. Testing (very important)
2. Correctness (see next section)
3. Code design and style
4. Stability, reliability
5. Delivery time (how fast you finish)

This task should take less than 20 hours once you know Go. You will be paid for your time.
To be specific, we will pay for your time to do this challenge, not to learn Go because
learning Go can take a few days or a few weeks.

Since this is a test, we can't give you answers, but if some part of the task, this readme,
or the starter code is not clear, then please email us.

Requirements
------------

See the comment block in `dsn.go` for requirements. This is how we gauge correctness.

In general, the real `mysql` command-line tool is the standard that we imitate as closely
as possible. This explains why "localhost" implies the socket, etc.

When you're done
----------------

When you're done, please tarball your app and email it to us including anything you
would like us to know or to look at specifically.  Thanks in advance for your time and work!
