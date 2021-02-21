const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const checkObjectId = require('../../middleware/checkObjectId');

const Resume = require('../../models/Resume');
const User = require('../../models/User');

// @route GET /api/resumes
// @desc Get current users resumes
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.user.id
    });
    res.json(resumes);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});
