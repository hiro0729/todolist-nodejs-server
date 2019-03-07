'use strict';

const Controller = require('egg').Controller;
const TodoListService = require('../service/todolist');
const todoListService = new TodoListService();

class TodoListController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      ctx.body = await todoListService.all();
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }
  async show() {
    const { ctx } = this;
    try {
      ctx.body = await todoListService.get(ctx.params.id);
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }
  async create() {
    const { ctx } = this;
    try {
      ctx.body = await todoListService.create(ctx.request.body.content);
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }
  async update() {
    const { ctx } = this;
    try {
      ctx.body = await todoListService.update(ctx.params.id, ctx.request.body.content);
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }
  async destroy() {
    const { ctx } = this;
    try {
      ctx.body = await todoListService.destroy(ctx.params.id);
    } catch (e) {
      ctx.body = e;
      ctx.status = 500;
    }
  }
}

module.exports = TodoListController;
