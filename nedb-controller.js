'use strict'
const router = require('express').Router();
const nedbStore = require('./nedb-store');

router.get('/', (req, res) => {
  nedbStore.getAll()
           .then((results) => {
              res.render('todo-demo', { todos: results });
            });
});

router.post('/todo', (req, res, next) => {
      nedbStore.add(req.body.description)
               .then(result => res.send(result))
               .catch(next);
    });

router.delete('/todos', (req, res, next) => {
    nedbStore.deleteAll()
            .then(() => res.send());
  });

module.exports = router;
