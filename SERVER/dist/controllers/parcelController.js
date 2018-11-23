'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parcel = require('../modal/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parcelController = function () {
  function parcelController() {
    _classCallCheck(this, parcelController);
  }

  _createClass(parcelController, null, [{
    key: 'getAllParcels',
    value: function getAllParcels(req, res) {
      return res.json({
        message: 'List of All parcels',
        parcels: _parcel2.default
      });
    }
  }, {
    key: 'getParcelByID',
    value: function getParcelByID(req, res) {
      var Pid = req.params.Pid;

      var parcel = _parcel2.default.find(function (e) {
        return e.Pid === Pid;
      });
      if (parcel) {
        res.status(200).json({
          message: 'The parcel has been Found',
          parcel: _parcel2.default
        });
      } else {
        res.status(400).json({
          error: 'The parcel with the provided Id does not exist'
        });
      }
    }
  }, {
    key: 'createParcel',
    value: function createParcel(req, res) {
      var newPid = parseInt(_parcel2.default.length, 10) + 1;
      var _req$body = req.body,
          Powner = _req$body.Powner,
          Plocation = _req$body.Plocation,
          Pdestination = _req$body.Pdestination,
          Pweight = _req$body.Pweight;

      var newParcel = {
        Pid: newPid,
        Powner: Powner,
        Plocation: Plocation,
        Pdestination: Pdestination,
        Pweight: Pweight
      };
      _parcel2.default.push(newParcel);
      return res.status(200).json({
        message: 'created a new parcel',
        Parcels: newParcel
      });
    }
  }, {
    key: 'cancelParcel',
    value: function cancelParcel(req, res) {
      var Pid = req.params.Pid;

      var findParcel = _parcel2.default.find(function (e) {
        return e.Pid === Pid;
      });
      if (findParcel) {
        var newParcels = _parcel2.default.filter(function (e) {
          return e !== findParcel;
        });
        res.status(200).json({
          message: 'The specified parcel was successfully canceled',
          Parcels: newParcels
        });
      } else {
        res.status(400).json({
          error: 'could not cancel the specified parcel'
        });
      }
    }
  }, {
    key: 'updaetParcel',
    value: function updaetParcel(req, res) {
      var Pid = req.params.Pid;

      var findParcel = _parcel2.default.find(function (e) {
        return e.Pid === Pid;
      });
      if (findParcel) {
        findParcel.Pdestination = req.body.Pdestination;
        res.status(200).json({
          message: 'The parcel was successfully updated'
        });
      } else {
        res.status(400).json({
          error: 'The parcel could not be updated'
        });
      }
    }
  }]);

  return parcelController;
}();

exports.default = parcelController;