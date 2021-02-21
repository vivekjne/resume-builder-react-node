const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true
  },
  experience: [
    {
      company: {
        type: String,
        required: true
      },
      designation: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      }
    }
  ],
  education: [
    {
      institute: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      passingDate: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      }
    }
  ],
  skills: {
    type: [String],
    required: true
  },
  social: {
    linkedin: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
