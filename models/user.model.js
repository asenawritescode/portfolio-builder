const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    stillWorking: {
        type: Boolean,
        default: false
    },
    workDetails: {
        type: String
    }
});


const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    stillStudying: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    }
});

const socialMediaSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    socialLinks: {
        type: [socialMediaSchema],
        default: []
    },
    bio: {
        type: String
    },
    workExperience: {
        type: [workExperienceSchema]
    },
    education: {
        type: [educationSchema]
    },
    skills: {
        type: String
    },
    templateId: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;