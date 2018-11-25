/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import chai from 'chai';
// eslint-disable-next-line import/no-extraneous-dependencies
import chaiHttp from 'chai-http';
import app from '../api/app';

chai.use(chaiHttp);

describe('Parcels', () => {
  describe('Get all Parcels', () => {
    it('should return all parcels', (done) => {
      chai
        .request(app)
        .get('/api/v1/parcels')
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          done();
        });
    });
  });
  describe('Get one parcel with id 1', () => {
    it('should return the parcel with specified ID', (done) => {
      const Pid = 1;
      chai
        .request(app)
        .get(`/api/v1/parcels/${Pid}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body.message).to.equal('The parcel has been Found');
          done();
        });
    });
  });
  describe('Get a parcel with id 20', () => {
    it('Should return an error', (done) => {
      const Pid = 20;
      chai
        .request(app)
        .get(`/api/v1/parcels/${Pid}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.message).to.equal('The parcel with the provided Id does not exist');
          done();
        });
    });
  });
  describe('Creting a new parcel', () => {
    it('should create a new parcel', (done) => {
      const newParcel = {
        Pid: newPid,
        userId: newPid + 1,
        Powner,
        Plocation,
        Pdestination,
        Pweight,
      };
      chai
        .request(app)
        .post('/api/v1/parcels')
        .send(newParcel)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(201);
          chai.expect(res.body.message).to.equal('The parcel was cretaed');
          done();
        });
    });
  });
});
