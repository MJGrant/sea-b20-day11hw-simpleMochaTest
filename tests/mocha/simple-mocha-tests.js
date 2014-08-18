var server = require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('grubRoutes', function() {
  var url = 'http://localhost:3000';

  it('gets a random grub', function (done) {
    chai.request(url)
      .get('/grub/random')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body[0]).to.have.property('grub');
        done();
      });
  });

  it('checks if the count is a number', function (done) {
    chai.request(url)
    .res(function(res) {
      expect(res).to.have.status(200);
      expect(grubs.count).to.be.a('number');
      done();
    });
  });

  it('should update the grub count', function (done) {
    chai.request(url)
      .post('/grub/count/1')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(grubs.count).to.eql(11);
        done();
      });
  });
});