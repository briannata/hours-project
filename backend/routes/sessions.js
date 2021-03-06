const router = require('express').Router();
let Session = require('../models/session.model');

// get method
router.route('/').get((req, res) => {
  Session.find()
    .then(sessions => res.json(sessions))
    .catch(err => res.status(400).json('Error: ' + err));
});


// method for adding a session to the database
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const duration = Number(req.body.duration);
  const tasks_created = Number(req.body.tasks_created);
  const tasks_completed = req.body.tasks_completed;
  const id = req.body.id;

  const newSession = new Session({
    name,
    duration,
    tasks_created,
    tasks_completed,
    id
  });

  newSession.save()
  .then(() => res.json('Session added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


// find session by id method
router.route('/:id').get((req, res) => {
  Session.findById(req.params.id)
    .then(session => res.json(session))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete session by id method
router.route('/:id').delete((req, res) => {
  Session.findByIdAndDelete(req.params.id)
    .then(() => res.json('Session deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update session by id method
router.route('/update/:id').post((req, res) => {
  Session.findById(req.params.id)
    .then(session => {
        session.name = req.body.name;
        session.duration = Number(req.body.duration);
        session.tasks_created = Number(req.body.tasks_created);
        session.tasks_completed = Number(req.body.tasks_completed);
        session.id = req.body.id;

        session.save()
        .then(() => res.json('Session updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;