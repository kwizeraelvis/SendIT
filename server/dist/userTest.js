'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../api/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default); /* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

describe('user', function () {
  // eslint-disable-next-line no-undef
  describe('list all parcels for a user', function (done) {
    var Uid = 1;
    _chai2.default.request(_app2.default).get('/api/v1/users/' + Uid + '/parcels').end(function (err, res) {
      _chai2.default.expect(res.status).to.equal(200);
      _chai2.default.expect(res.body).to.be.a('object');
      done();
    });
  });
  describe('Fail to list parcel for user with id 15', function () {
    it('should not return any parcel', function (done) {
      var Uid = 15;
      _chai2.default.request(_app2.default).get('/api/v1/users/' + Uid + '/parcels').end(err, res);
      _chai2.default.expect(res.status).to.equal(400);
      _chai2.default.expect(res.body.message).to.equal('The user has no packages');
      done();
    });
  });
});