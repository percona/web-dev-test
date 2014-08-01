var data = [
	{"date":'2014-07-01', 'data': [31, 263, 159, 22, 270]},
	{"date":'2014-07-02', 'data': [14, 260, 158, 12, 276]},
	{"date":'2014-07-03', 'data': [24, 265, 164, 19, 269]},
	{"date":'2014-07-04', 'data': [23, 269, 168, 19, 276]},
	{"date":'2014-07-05', 'data': [25, 272, 168, 17, 279]},
	{"date":'2014-07-06', 'data': [ 5, 259, 160,  3, 283]},
	{"date":'2014-07-07', 'data': [ 5, 257, 159,  4, 288]}
];

exports.findAll = function (req, res) {
	res.send([{id:1,name:'mysql'}, {id:2,name:'cpu'}, {id:3,name:'disk-sda01'}]);
};

exports.findById = function (req, res) {
	var str = '';
	switch (req.params.id) {
		case '1':
			str = '{"id":"' + req.params.id + '", "name": "mysql", "description": "MySQL Load"}';
			break;
		case '2':
			str = '{"id":"' + req.params.id + '", "name": "cpu", "description": "CPU Usage"}';
			break;
		case '3':
			str = '{"id":"' + req.params.id + '", "name": "disk-sda01", "description": "Disk Writes on /dev/sda01"}';
			break;
		default:
			str = '{"id":"' + req.params.id + '", "name": null, "description": null}';
	}
	res.send(JSON.parse(str));
};

exports.getChartData = function (req, res) {
	res.send(data);
};

exports.getChartDataForDate = function (req, res) {
	var reqDate = req.params.date // e.g. 2014-07-01
	for (var i = 0, len = data.length; i < len; i++) {
		if (data[i].date == reqDate) {
			res.send(data[i]);
			return;
		}
	}
	res.send(null,404);
};
