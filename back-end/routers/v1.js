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
router.put('/v1/users/:id', user.updateUser);
router.delete('/v1/users/:id', user.deleteUser);

// Lessons
router.get('/v1/lessons', lessons.getLessons);

// Lesson
router.get('/v1/lessons/:id', lesson.getLesson);
router.post('/v1/lessons', lesson.addLesson);
router.put('/v1/lessons/:id', lesson.updateLesson);
router.delete('/v1/lessons/:id', lesson.deleteLesson);

module.exports = router;