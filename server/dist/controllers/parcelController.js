'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _parcel = require('../modal/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parcelsController = function () {
  function parcelsController() {
    _classCallCheck(this, parcelsController);
  }

  _createClass(parcelsController, null, [{
    key: 'getParcels',
    value: function getParcels(req, res) {
      return res.json({
        message: 'List of all parcels',
        parcels: _parcel2.default
      });
    }
  }, {
    key: 'createParcel',
    value: function createParcel(req, res) {
      var data = req.body;
      var schema = _joi2.default.object().keys({
        Powner: _joi2.default.string().required(),
        Plocation: _joi2.default.string().required(),
        Pdestination: _joi2.default.string().required(),
        Pweight: _joi2.default.number().required(),
        Pstatus: _joi2.default.string().required()
      });
      _joi2.default.valPidate(data, schema, function (err, value) {
        var newPid = _parcel2.default.length + 1;
        if (err) {
          res.status(400).json({
            message: 'invalid data'
          });
        } else {
          _parcel2.default.push(value);
          res.status(200).json({
            message: 'created a new parcel',
            data: Object.assign({ newPid: newPid }, value)
          });
        }
      });
    }

    // get one parcel

  }, {
    key: 'getOne',
    value: function getOne(req, res) {
      var Pid = req.params.Pid;

      var oneParcel = _parcel2.default.find(function (parcel) {
        return parcel.Pid === Pid;
      });
      if (oneParcel) {
        return res.json({
          message: 'parcel found',
          parcel: oneParcel
        });
      }
      return res.status(400).json({
        message: 'parcel not found'
      });
    }

    // change parcel status

  }, {
    key: 'changeParcelStatus',
    value: function changeParcelStatus(req, res) {
      var Pid = req.params.Pid;

      var oneParcel = _parcel2.default.find(function (parcel) {
        return parcel.Pid === Pid;
      });
      if (oneParcel) {
        var updatedStatus = req.body.updatedStatus;

        oneParcel.status = updatedStatus;
        return res.status(200).json({
          message: 'status changed'
        });
      }
      return res.status(400).json({
        message: 'status could not be changed'
      });
    }
    // cancel a parcel order

  }, {
    key: 'cancelParcel',
    value: function cancelParcel(req, res) {
      // eslint-disable-next-line prefer-destructuring
      var Pid = req.params.Pid;
      var cancelParcel = _parcel2.default.find(function (parcel) {
        return parcel.Pid === Pid;
      });
      if (cancelParcel) {
        var toCancel = req.body.cancelled;
        res.status(200).json({
          message: 'order cancelled'
        });
        // eslint-disable-next-line no-return-assign
        return cancelParcel.cancel = toCancel;
      }
      return res.status(400).json({
        message: 'parcel cannot be cancelled'
      });
    }

    // remove one parcel

  }, {
    key: 'removeParcel',
    value: function removeParcel(req, res) {
      var Pid = req.params.Pid;

      var oneParcel = _parcel2.default.find(function (parcel) {
        return parcel.Pid === Pid;
      } // returns true if the parcel is found with the Pid from params
      );
      var parcelIndex = _parcel2.default.indexOf(oneParcel);
      if (oneParcel) {
        _parcel2.default.splice(parcelIndex, 1);
        return res.status(200).json({
          message: 'parcel deleted',
          Parcels: _parcel2.default
        });
      }
      return res.status(400).json({
        message: 'parcel do not exist'
      });
    }
  }]);

  return parcelsController;
}();

exports.default = parcelsController;