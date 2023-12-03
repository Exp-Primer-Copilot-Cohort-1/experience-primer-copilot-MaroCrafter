// Create web server application
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

//Handle request
router.get('/', commentsController.getAllComments);
router.get('/create', commentsController.getCreateComment);