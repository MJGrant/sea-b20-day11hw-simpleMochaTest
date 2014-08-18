var server = require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('grubRoutes', function() {
  var url = 'http://localhost:3000';

  it('gets a random grub', function (done) {
    chai.request(url)
      .get('/grubs/random')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('grub');
        done();
      });
  });

  it('gets Wy', function (done) {
    chai.request(url)
      .get('/grubs/all')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body[0].grub).to.eql('Wy');
        done();
      });
  });

  it('checks if the count is a number', function (done) {
    chai.request(url)
    .get('/grubs/count')
    .res(function(res) {
      expect(res).to.have.status(200);
      expect(res.body.count).to.be.a('number');
      done();
    });
  });

  it('should update the grub count', function (done) {
    chai.request(url)
      .get('/grubs/add/1')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body.count).to.eql(11);
        done();
      });
  });
});