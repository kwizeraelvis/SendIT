'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../api/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
_chai2.default.use(_chaiHttp2.default); /* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies


describe('PARCELS', function () {
  describe('Get all parcels', function () {
    it('should return an object of all parcels', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/parcels').end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(200);
        _chai2.default.expect(res.body).to.be.a('object');
        done();
      });
    });
  });
  describe('Get one parcel with id 1', function () {
    it('should return one parcel object', function (done) {
      var Pid = 1;
      _chai2.default.request(_app2.default).get('/api/v1/parcels/' + Pid).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(200);
        _chai2.default.expect(res.body).to.be.a('object');
        _chai2.default.expect(res.body.message).to.equal('parcel found');
        done();
      });
    });
  });
  describe('Get one parcel with id 10', function () {
    it('should return error', function (done) {
      var Pid = 10;
      _chai2.default.request(_app2.default).get('/api/v1/parcels/' + Pid).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(400);
        _chai2.default.expect(res.body.message).to.equal('parcel not found');
        done();
      });
    });
  });
  describe('adding a parcel', function () {
    it('should add new parcel', function (done) {
      var parcel = {
        Powner: 'Kevin',
        Plocation: 'Kigali',
        Pdestination: 'Huye',
        Pweight: '50',
        Pstatus: 'Pending'
      };
      _chai2.default.request(_app2.default).post('/api/v1/parcels').send(parcel).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(200);
        _chai2.default.expect(res.body).to.be.a('object');
        _chai2.default.expect(res.body.message).to.equal('created a new parcel');

        done();
      });
    });
  });
  describe('adding a parcel status', function () {
    it('should update status of  parcel', function (done) {
      var id = 1;
      _chai2.default.request(_app2.default).put('/api/v1/parcels/status/' + id).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(200);
        _chai2.default.expect(res.body.message).to.equal('status changed');

        done();
      });
    });
  });
  describe('adding a parcel status', function () {
    it('should update status of  parcel', function (done) {
      var id = 100;
      _chai2.default.request(_app2.default).put('/api/v1/parcels/status/' + id).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(400);
        _chai2.default.expect(res.body.message).to.equal('status could not be changed');

        done();
      });
    });
  });
  describe('adding invalid parcel', function () {
    it('should fail to add new parcel', function (done) {
      var parcel = {
        pickupLocation: 'Ruhango,Avenue 25 street',
        destinationLocation: 'Musanze, City Market',
        weight: '400 g',
        comment: 'clothes'
      };
      _chai2.default.request(_app2.default).post('/api/v1/parcels').send(parcel).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(400);
        _chai2.default.expect(res.body.message).to.equal('invalid data');

        done();
      });
    });
  });
  describe('Delete a parcel with id 3', function () {
    it('should return one parcel object', function (done) {
      var id = 3;
      _chai2.default.request(_app2.default).delete('/api/v1/parcels/' + id).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(200);
        _chai2.default.expect(res.body).to.be.a('object');
        _chai2.default.expect(res.body.message).to.equal('parcel deleted');
        done();
      });
    });
  });
  describe('Delete a parcel that doesnot exist', function () {
    it('should fail to delete a parcel', function (done) {
      var Pid = 10;
      _chai2.default.request(_app2.default).delete('/api/v1/parcels/' + Pid).end(function (err, res) {
        _chai2.default.expect(res.statusCode).to.be.equal(400);
        _chai2.default.expect(res.body.message).to.equal('parcel do not exist');
        done();
      });
    });
  });
  describe('cancel a parcel with id 1', function () {
    it('should cancel an order', function (done) {
      var Pid = 1;
      _chai2.default.request(_app2.default).put('/api/v1/parcels/' + Pid + '/cancel').set('content-type', 'application/json').send({
        cancel: true
      }).end(function (err, res) {
        _chai2.default.expect(res.status).to.equal(200);
        _chai2.default.expect(res.body.message).to.equal('order cancelled');
        done();
      });
    });
  });
  describe('cancel a parcel with id 10', function () {
    it('should fail to cancel an order', function (done) {
      var Pid = 10;
      _chai2.default.request(_app2.default).put('/api/v1/parcels/' + Pid + '/cancel').set('content-type', 'serverlication/json').send({
        cancel: true
      }).end(function (err, res) {
        _chai2.default.expect(res.status).to.equal(400);
        _chai2.default.expect(res.body.message).to.equal('parcel cannot be cancelled');
        done();
      });
    });
  });
});