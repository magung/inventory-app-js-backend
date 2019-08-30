'use strict';

var response = require('../res');

exports.index = function(req, res) {
	response.ok('Welcome this is Inventory App', res);
}
exports.notFound = function(req, res) {
	response.dataManipulation(res, 404, 'page not found');
}
exports.badRequest = function(req, res) {
	response.dataManipulation(res, 400, 'Bad Request');
}



