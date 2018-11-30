/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Parcels', () => {
  describe('GET api/v1/parcels', () => {
    it('it should return all parcels', (done) => {
      chai.request(server).get('/api/v1/parcels').end((err, res) => {
        expect(res.status).to.equal(200);
        //  console.log(res.text);
      });
      done();
    });
  });
});

describe('Get one parcel with id 1', () => {
  it('should return one parcel object', (done) => {
    const pid = 1;
    chai.request(server).get(`/api/v1/parcels/${pid}`).end((err, res) => {
      expect(res.status).to.equal(200);
      console.log(res.text);
    });
    done();
  });
});
describe('Get one parcel with id 10', () => {
  it('should return error', (done) => {
    const Pid = 10;
    chai
      .request(router)
      .get(`/api/v1/parcels/${Pid}`)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.message).to.equal('parcel not found');
        done();
      });
  });
});
describe('adding a parcel', () => {
  it('should add new parcel', (done) => {
    const parcel = {
      Powner: 'Kevin',
      Plocation: 'Kigali',
      Pdestination: 'Huye',
      Pweight: '50',
      Pstatus: 'Pending',
    };
    chai
      .request(router)
      .post('/api/v1/parcels')
      .send(parcel)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(200);
        // chai.expect(res.body).to.be.a('object');
        chai.expect(res.body.message).to.equal('created a new parcel');

        done();
      });
  });
});
describe('adding a parcel status', () => {
  it('should update status of  parcel', (done) => {
    const id = 1;
    chai
      .request(router)
      .put(`/api/v1/parcels/status/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(200);
        chai.expect(res.body.message).to.equal('status changed');

        done();
      });
  });
});
describe('adding a parcel status', () => {
  it('should update status of  parcel', (done) => {
    const id = 100;
    chai
      .request(router)
      .put(`/api/v1/parcels/status/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.message).to.equal('status could not be changed');

        done();
      });
  });
});
describe('adding invalid parcel', () => {
  it('should fail to add new parcel', (done) => {
    const parcel = {
      pickupLocation: 'Ruhango,Avenue 25 street',
      destinationLocation: 'Musanze, City Market',
      weight: '400 g',
      comment: 'clothes',
    };
    chai
      .request(router)
      .post('/api/v1/parcels')
      .send(parcel)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.message).to.equal('invalid data');

        done();
      });
  });
});
describe('Delete a parcel with id 3', () => {
  it('should return one parcel object', (done) => {
    const id = 3;
    chai
      .request(router)
      .delete(`/api/v1/parcels/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.body.message).to.equal('parcel deleted');
        done();
      });
  });
});
describe('Delete a parcel that doesnot exist', () => {
  it('should fail to delete a parcel', (done) => {
    const Pid = 10;
    chai
      .request(router)
      .delete(`/api/v1/parcels/${Pid}`)
      .end((err, res) => {
        chai.expect(res.status).to.be.equal(400);
        chai.expect(res.body.message).to.equal('parcel do not exist');
        done();
      });
  });
});
describe('cancel a parcel with id 1', () => {
  it('should cancel an order', (done) => {
    const Pid = 1;
    chai
      .request(router)
      .put(`/api/v1/parcels/${Pid}/cancel`)
      .set('content-type', 'application/json')
      .send({
        cancel: true,
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body.message).to.equal('order cancelled');
        done();
      });
  });
});

describe('cancel a parcel with id 10', () => {
  it('should fail to cancel an order', (done) => {
    const Pid = 10;
    chai
      .request(router)
      .put(`/api/v1/parcels/${Pid}/cancel`)
      .set('content-type', 'serverlication/json')
      .send({
        cancel: true,
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(400);
        chai.expect(res.body.message).to.equal('parcel cannot be cancelled');
        done();
      });
  });
});
