'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var users = [{
  Uid: '1',
  Unames: 'Kwizera',
  Ulocation: 'Kigali',
  Uemail: 'weirdemail@weirdhost.weird',
  Parcels: [{
    Pid: 1,
    Powner: 'Kwizera',
    Plocation: 'Kigali',
    Pdestination: 'Ruhungeri',
    Pweight: '200',
    Pstatus: 'Intransit'
  }, {
    Pid: 2,
    Powner: 'Kwizera',
    Plocation: 'Musanze',
    Pdestination: 'Ruhango',
    Pweight: '100',
    Pstatus: 'Intransit'
  }]
}];

exports.default = users;