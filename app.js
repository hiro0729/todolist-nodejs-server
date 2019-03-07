'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  async didReady() {
    // init db
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('demo.sqlite3');
    db.serialize(() => {
      db.run('CREATE TABLE IF NOT EXISTS todolist (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,content TEXT)');
    });
    db.close();
    console.log('db inited');
  }
}
module.exports = AppBootHook;
