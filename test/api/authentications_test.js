/* globals api, expect, describe, beforeEach, afterEach, it, xit */

require('./helper');
const User = require('../../models/user');

describe('Auth', function() {

  // drop the database before each instance of the test
  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  //describe the POST request to the registration api
  // it syntax with text explaining the task and followed by a function which posts, sets and sends sample log-in data based on the user model.
  // end syntax which passes 'err' and 'res' as arguments and 'expects' responses as specified by us
  //complete the test with 'done' and it will move to the next one.
  describe('POST /api/register', function(){

    it('should register a user with the correct credentials', function  (done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          name: 'Laura',
          username: 'Laurayo',
          email: 'laura@laura.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
          bio: 'I am great',
          formatted_address: '454 roady road'
        })
        .end((err, res) => {
          expect(res.status).to.eq(201);
          expect(res.body).to.be.a('object');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });

    // it('should not register a user with no email', function(done) {
    //   api
    //     .post('/api/register')
    //     .set('Accept', 'application/json')
    //     .send({
    //       name: 'Laura',
    //       username: 'Laurayo',
    //       password: 'password',
    //       passwordConfirmation: 'password',
    //       image: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
    //       bio: 'I am great',
    //       formatted_address: '454 roady road'
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.eq(500);
    //       expect(res.body).to.be.a('object');
    //       expect(res.body.message).to.eq('Woops, something went wrong!');
    //       done();
    //     });
    // });
    //
    // it('should not register a user with no password', function(done) {
    //   api
    //     .post('/api/register')
    //     .set('Accept', 'application/json')
    //     .send({
    //       name: 'Laura',
    //       username: 'Laurayo',
    //       email: 'laura@laura.com',
    //       passwordConfirmation: 'password',
    //       image: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
    //       bio: 'I am great',
    //       formatted_address: '454 roady road'
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.eq(500);
    //       expect(res.body).to.be.a('object');
    //       expect(res.body.message).to.eq('Woops, something went wrong!');
    //       done();
    //     });
    // });
    //
    // it('should not register a user with no password confirmation', function(done) {
    //   api
    //     .post('/api/register')
    //     .set('Accept', 'application/json')
    //     .send({
    //       name: 'Laura',
    //       username: 'Laurayo',
    //       email: 'laura@laura.com',
    //       password: 'password',
    //       image: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
    //       bio: 'I am great',
    //       formatted_address: '454 roady road'
    //     })
    //     .end((err, res) => {
    //       expect(res.status).to.eq(500);
    //       expect(res.body).to.be.a('object');
    //       expect(res.body.message).to.eq('Woops, something went wrong!');
    //       done();
    //     });
    // });

  });
});
