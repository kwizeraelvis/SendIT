'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelController = require('../controllers/parcelController');

var _parcelController2 = _interopRequireDefault(_parcelController);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/v1/parcels', _parcelController2.default.getAllParcels);
router.get('/api/v1/parcels/:Pid', _parcelController2.default.getParcelByID);
router.get('/api/v1/users/:userId/parcels', _userController2.default.getParcelByUser);
router.post('/api/v1/parcels', _parcelController2.default.createParcel);
router.put('/api/v1/parcels/:Pid/update', _parcelController2.default.changeParcelStatus);
router.put('/api/v1/parcels/:Pid/cancel', _parcelController2.default.cancelParcel);
router.delete('/api/v1/parcels/:Pid/delete', _parcelController2.default.removeParcel);

exports.default = router;