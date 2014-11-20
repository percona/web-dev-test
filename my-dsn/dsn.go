package main

/*
	Requirements:
		1. Command-line values override default values.
		2. If host == localhost, auto-detect and use socket.
		3. Host overrides socket if host != localhost.
		4. Use "netstat -anp" to auto-detect socket from the first line like:
			 unix  2      [ ACC ]     STREAM     LISTENING     11518    -                   /var/run/mysqld/mysqld.sock
		5. Use "mysql --print-defaults" to get defaults; run with -defaults-file
		   as first arg if specified, e.g.:
			 my-dsn -defaults-file=/root/foo --> mysql --defaults-file=/root/foo --print-defaults
		6. Socket from #5 overrides socket from #4.
		7. Testable and tested without running real netstat or mysql.
*/

type DSNParser interface {
	Parse(opts map[string]string) string
}

type RealDSNParser struct {
}

func NewRealDSNParser() *RealDSNParser {
	p := &RealDSNParser{}
	return p
}

func (p *RealDSNParser) Parse(opts map[string]string) string {
	return "Hello world!"
}
