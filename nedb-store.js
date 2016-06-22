'use strict'
const Promise = require('bluebird');
const path = require('path');
const Database = require('nedb');
Promise.promisifyAll(Database.prototype);
const db = new Database({ filename: path.join(__dirname, '/db/todos.db'), autoload: true });

const add = (description) => {
  return db.insertAsync({ description: description });
};

const getAll = () => {
  //console.dir(db.prototype);
  //db.loadDatabaseAsync().then(()=>db.findAsync({}));
  return db.findAsync({});
};

const deleteAll = () => {
    return db.removeAsync({}, { multi: true });
  };

module.exports = {
  add: add,
  getAll: getAll,
  deleteAll: deleteAll,
};
