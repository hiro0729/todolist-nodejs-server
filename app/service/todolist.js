'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('demo.sqlite3');

class TodoListService {
  /**
   * list all records
   * @return {Promise<any>} all records array
   */
  all() {
    return new Promise((resolve, reject) => {
      db.all('SELECT id, content FROM todolist ORDER BY id DESC', function(err, rows) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(rows);
          resolve(rows);
        }
      });
    });
  }
  /**
   * find one record
   * @param {int} $id record's id
   * @return {Promise<any>} one record object
   */
  get($id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT id, content FROM todolist WHERE id=$id', { $id }, function(err, row) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(row);
          if (row) {
            resolve(row);
          } else {
            reject('null');
          }
        }
      });
    });
  }
  /**
   * create a record
   * @param {String} $content content
   * @return {Promise<any>} record's id
   */
  create($content) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO todolist(content) VALUES ($content)', { $content }, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, content: $content });
        }
      });
    });
  }
  /**
   * update a record
   * @param {int} $id id
   * @param {String} $content content
   * @return {Promise<any>} record's id
   */
  update($id, $content) {
    return new Promise((resolve, reject) => {
      db.run('UPDATE todolist SET content=$content WHERE id=$id', { $id, $content }, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }
  /**
   * delete a record
   * @param {int} $id id
   * @return {Promise<any>} id
   */
  destroy($id) {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM todolist WHERE id=$id', { $id }, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }
}

module.exports = TodoListService;
