'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello, this is a nodejs server';
  }
}

module.exports = HomeController;
