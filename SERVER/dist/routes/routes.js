'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelController = require('../controllers/parcelController');

var _parcelController2 = _interopRequireDefault(_parcelController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/v1/parcels', _parcelController2.default.getAllParcels);
router.get('/api/v1/parcels/:Pid', _parcelController2.default.getParcelByID);
router.post('/api/v1/parcels', _parcelController2.default.createParcel);
router.put('/api/v1/parcels/:Pid', _parcelController2.default.updaetParcel);
router.delete('/api/v1/parcels/:Pid', _parcelController2.default.cancelParcel);

exports.default = router;