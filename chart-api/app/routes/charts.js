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
			str = '{"id":"' + req.params.id + '", "name": "cpu", "description": "CPU system"}';
			break;
		case '3':
			str = '{"id":"' + req.params.id + '", "name": "disk-sda01", "description": "Disk Writes on /dev/sda01"}';
			break;
		default:
			str = '{"id":"' + req.params.id + '", "name": null, "description": null}';
	}
	res.send(JSON.parse(str));
};
exports.getGraphsById = function (req, res) {
	var reqDate = new Date();
	var dd = reqDate.getDate();
	var mm = reqDate.getMonth() + 1;
	var yyyy = reqDate.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var str = '[{"date":"' + yyyy + '-' + mm + '-01' + '","s1":31,"s2":263,"s3":159,"s4":22,"s5":270},{"date":"' + yyyy + '-' + mm + '-02' + '","s1":14,"s2":260,"s3":158,"s4":12,"s5":276},{"date":"' + yyyy + '-' + mm + '-03' + '","s1":24,"s2":265,"s3":164,"s4":19,"s5":269},{"date":"' + yyyy + '-' + mm + '-04' + '","s1":23,"s2":269,"s3":168,"s4":19,"s5":276},{"date":"' + yyyy + '-' + mm + '-05' + '","s1":25,"s2":272,"s3":168,"s4":17,"s5":279},{"date":"' + yyyy + '-' + mm + '-06' + '","s1":5,"s2":259,"s3":160,"s4":3,"s5":283},{"date":"' + yyyy + '-' + mm + '-07' + '","s1":5,"s2":257,"s3":159,"s4":4,"s5":288}]';
	res.send(JSON.parse(str));
};
exports.getGraphsForDate = function (req, res) {
	var str = '';
	var reqDate = new Date(req.params.date + ' 01:00:00');
	var dd = reqDate.getDate();
	var mm = reqDate.getMonth() + 1;
	var yyyy = reqDate.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var newDate = yyyy + '-' + mm + '-' + dd;
	switch (dd) {
		case '01':
			str = '{"date":"' + newDate + '","s1":31,"s2":263,"s3":159,"s4":22,"s5":270}';
			break;
		case '02':
			str = '{"date":"' + newDate + '","s1":14,"s2":260,"s3":158,"s4":12,"s5":276}';
			break;
		case '03':
			str = '{"date":"' + newDate + '","s1":24,"s2":265,"s3":164,"s4":19,"s5":269}';
			break;
		case '04':
			str = '{"date":"' + newDate + '","s1":23,"s2":269,"s3":168,"s4":19,"s5":276}';
			break;
		case '05':
			str = '{"date":"' + newDate + '","s1":25,"s2":272,"s3":168,"s4":17,"s5":279}';
			break;
		case '06':
			str = '{"date":"' + newDate + '","s1":5,"s2":259,"s3":160,"s4":3,"s5":283}';
			break;
		case '07':
			str = '{"date":"' + newDate + '","s1":5,"s2":257,"s3":159,"s4":4,"s5":288}';
			break;
		default:
			str = '{"date":"' + newDate + '","s1":0,"s2":0,"s3":0,"s4":0,"s5":0}';
	}
	res.send(JSON.parse(str));
};


