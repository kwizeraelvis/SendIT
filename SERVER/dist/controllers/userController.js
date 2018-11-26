'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('../modal/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var usersController = function () {
  function usersController() {
    _classCallCheck(this, usersController);
  }

  _createClass(usersController, null, [{
    key: 'getParcelByUser',
    value: function getParcelByUser(req, res) {
      var Uid = req.params.Uid;

      var userparcel = _users2.default.find(function (parcel) {
        return parcel.Uid === Uid;
      });
      if (userparcel) {
        res.status(200).json({
          message: 'Parcels for ' + _users2.default.Unames,
          parcels: userparcel.Parcels
        });
      } else {
        res.status(400).json({
          message: 'The user has no packages'
        });
      }
    }
  }]);

  return usersController;
}();

exports.default = usersController;