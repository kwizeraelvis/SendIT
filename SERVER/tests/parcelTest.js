import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';
import { doesNotReject } from 'assert';

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
        const id = 1;
        chai
        .request(app)
        .get(`/api/v1/parcels/${id}`);
        .end((err, res) => {
         chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body.message).to.equal('The parcel has been Found');
            done();
        });
    });
});
describe