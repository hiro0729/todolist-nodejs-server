'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/todolist.test.js', () => {
  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  let tempId;

  it('should POST /todolist', done => {
    app.httpRequest()
      .post('/todolist')
      .send({ content: 'something' })
      .expect(200)
      .end(function(err, res) {
        console.log(res.body);
        tempId = res.body.id;
        done();
      });
  });

  it('should PUT /todolist', done => {
    app.httpRequest()
      .put('/todolist/' + tempId)
      .send({ content: 'something updated' })
      .expect(200)
      .end(function(err, res) {
        console.log(res.body);
        done();
      });
  });

  it('should GET /todolist', done => {
    app.httpRequest()
      .get('/todolist')
      .expect(200)
      .end(function(err, res) {
        console.log(res.body);
        done();
      });
  });

  it('should DELETE /todolist', done => {
    app.httpRequest()
      .delete('/todolist/' + tempId)
      .expect(200)
      .end(function(err, res) {
        console.log(res.body);
        done();
      });
  });
});
