/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../api/app';
import 'babel-polyfill';

chai.use(chaiHttp);
describe('user', () => {
  // eslint-disable-next-line no-undef
  describe('list all parcels for a user', (done) => {
    const Uid = 1;
    chai
      .request(server)
      .get(`/api/v1/users/${Uid}/parcels`)
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
  describe('Fail to list parcel for user with id 15', () => {
    it('should not return any parcel', (done) => {
      const Uid = 15;
      chai
        .request(server)
        .get(`/api/v1/users/${Uid}/parcels`)
        .end(err, res);
      chai.expect(res.status).to.equal(400);
      chai.expect(res.body.message).to.equal('The user has no packages');
      done();
    });
  });
});
