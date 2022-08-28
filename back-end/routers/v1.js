<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const users = require('../controllers/v1/users');
const user = require('../controllers/v1/user');
const lessons = require('../controllers/v1/lessons');
const lesson = require('../controllers/v1/lesson');

// Users
router.get('/v1/users', users.getUsers);

// User
router.get('/v1/users/:login', user.getUser);
router.post('/v1/users', user.addUser);
router.patch('/v1/users/:id', user.updateUser);
router.delete('/v1/users/:id', user.deleteUser);

// Lessons
router.get('/v1/lessons', lessons.getLessons);

// Lesson
router.get('/v1/lessons/:id', lesson.getLesson);
router.post('/v1/lessons', lesson.addLesson);
router.patch('/v1/lessons/:id', lesson.updateLesson);
router.delete('/v1/lessons/:id', lesson.deleteLesson);

=======
const express = require('express');
const router = express.Router();

const users = require('../controllers/v1/users');
const user = require('../controllers/v1/user');
const lessons = require('../controllers/v1/lessons');
const lesson = require('../controllers/v1/lesson');
const tests = require('../controllers/v1/tests');
const test = require('../controllers/v1/test');

// Users
router.get('/v1/users', users.getUsers);

// User
router.get('/v1/users/:login', user.getUser);
router.post('/v1/users', user.addUser);
router.patch('/v1/users/:id', user.updateUser);
router.delete('/v1/users/:id', user.deleteUser);

// Lessons
router.get('/v1/lessons', lessons.getLessons);

// Lesson
router.get('/v1/lessons/:id', lesson.getLesson);
router.post('/v1/lessons', lesson.addLesson);
router.patch('/v1/lessons/:id', lesson.updateLesson);
router.delete('/v1/lessons/:id', lesson.deleteLesson);

// Tests
router.get('/v1/tests', tests.getTests);

// Test
router.get('/v1/tests', test.getTest);
router.post('/v1/tests', test.addTest);
router.put('/v1/tests/:id', test.updateTest);
router.delete('/v1/tests/:id', test.deleteTest);

module.exports = router;