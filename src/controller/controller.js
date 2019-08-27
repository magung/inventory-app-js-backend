'use strict';

var connection = require('../database/conn');
var response = require('../res');

exports.index = function(req, res) {
	response.ok('Welcome this is Inventory App', res);
}


