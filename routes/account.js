const
    express = require("express"),
    account_router = express.Router()
    ;

account_router
    // middlewares


    // endpoints
    .post('/details', async function (req, res) {
        /**
         * DETAILS TO FETCH
         * ARRAYS: 
         *          Education :
         *              Institution , 
         *              Degree
         *              From , to (Duration)
         *          Experience
         *              Institution , 
         *              Profession
         *              From , to (Duration)
         *          DashBoard Menu Links:
         *              Photo
         *              Title
         *              Description
         *          Projects : Enable sorting , running projects , feature project 
         *          Testimonials 
         *          Social media links
         *          Skills
         * Texts:
         *          Name
         *          Role
         *          Bio
         *          Number
         *          DOB
         *          Email
         *          Location
         * Files:
         *          Photos
         *          Videos
         * Customizations:
         *          Color
         * 
         * 
         */

        if (!req.body) return res.status(404)
            .json({
            })
    })

// 
module.exports = account_router