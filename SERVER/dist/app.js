'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/named

server.use(_express2.default.json());

server.use('/', _routes2.default);

// const port = process.env.PORT || 5000;
server.listen(55555);