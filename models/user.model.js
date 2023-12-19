const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: [true, 'Platform is required']
    },
    link: {
        type: String,
        required: [true, 'Link is required']
    }
});

const workExperienceSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: [true, 'Role name is required']
    },
    company: {
        type: String,
        required: [true, 'Company name is required']
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required']
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
        required: [true, 'Degree is required']
    },
    institution: {
        type: String,
        required: [true, 'Institution is required']
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required']
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

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    userName: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
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
    },
    role: {
        type: String
    },
    timestamp: {
        type: Date,
        required: [true, 'Timestamp is required'],
        default: Date.now
    },
    updatedOn: {
        type: Date,
        required: [true, 'Updated on is required'],
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;