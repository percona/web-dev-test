package main

import (
	"flag"
	"fmt"
)

var (
	flagDefaultsFile string
	flagSocket       string
	flagHost         string
	flagPort         string
	flagUser         string
	flagPass         string
)

func init() {
	flag.StringVar(&flagDefaultsFile, "defaults-file", "", "Defaults file")
	flag.StringVar(&flagSocket, "socket", "", "Socket file")
	flag.StringVar(&flagHost, "host", "localhost", "Hostname")
	flag.StringVar(&flagPort, "port", "3306", "Port")
	flag.StringVar(&flagUser, "user", "", "User")
	flag.StringVar(&flagPass, "pass", "", "Password")

	flag.Parse()
}

func main() {
	opts := map[string]string{
		"defaults-file": flagDefaultsFile,
		"socket":        flagSocket,
		"host":          flagHost,
		"port":          flagPort,
		"user":          flagUser,
		"pass":          flagPass,
	}
	dsnParser := NewRealDSNParser()
	dsn := dsnParser.Parse(opts)
	fmt.Println(dsn)
}
