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

router.post(
  '/',
  auth,
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email is required').notEmpty(),
  check('address', 'Address is required').notEmpty(),
  check('telephone', 'Telephone is required').notEmpty(),
  check('summary', 'Summary is required').notEmpty(),
  check('experience', 'Experience is required').notEmpty(),
  check('education', 'Education is required').notEmpty(),
  check('skills', 'Skills is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      address,
      telephone,
      summary,
      experience,
      education,
      skills,
      // spread the rest of the fields we don't need to check
      linkedin,
      twitter
    } = req.body;

    const resumeFields = {
      user: req.user.id,
      name,
      email,
      address,
      telephone,
      summary,
      experience,
      education,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((skill) => ' ' + skill.trim()),
      social: {
        linkedin,
        twitter
      }
    };

    try {
      // Using upsert option (creates new doc if no match is found):
      let resume = await Resume.create(resumeFields);
      return res.json(resume);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
