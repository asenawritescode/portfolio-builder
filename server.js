const { default: mongoose } = require("mongoose");
const map = new Map();

const
    express = require("express"),
    app = express(),
    path = require("path"),
    helmet = require("helmet"),
    session = require("express-session"),
    // cache = require("node-cache"),
    // ejs = require("ejs"),
    port = process.env.PORT || 5700,
    User = require("./models/user.model"),
    Template = require("./models/template.model"),
    getGrpedData = require("./functions/groupCollectiveData")
    ;


// connect to the database
require("./functions/connectDb")

// const myCache = new cache();

app
    // configs
    .use(express.json())
    .use(express.urlencoded())
    .use(
        session({
            secret: 'asenawritescode',
            cookie: { maxAge: 60 * 60 * 1000 }, // 10 minutes
            saveUninitialized: true,
        })
    )
    // security TODO: It is casuing a bug with loasding from cdn
    // .use(
    //     helmet.contentSecurityPolicy({
    //         directives: {
    //             scriptSrc: ["'self'", "https://unpkg.com"],
    //         },
    //     })
    // )

    // make files accesible 
    .use(express.static(path.join(`${__dirname}/views/demo1`)))
    .use(express.static(path.join(__dirname, 'node_modules')))
    .use(express.static(path.join(__dirname, 'public')))

    // view engine
    .set('view engine', 'ejs')
    .set('views', `${__dirname}/views/`)

    // mids
    .get('/', function (req, res) {
        // load all templates avaulable in db and render them
        const templates = Template.find();

        if (!templates) {
            return res.status(404).send('User not found');
        }

        return res.render('demo1/demo', { data: templates });
    })

    //  user-profile
    .get('/profile/:userId', async function (req, res) {
        const userId = req.params.userId;
        // Use the userId to load the specific user page
        if (!userId) {
            return res.status(404).send('User not found');
        }

        // get data from db 
        // TODO : cache support ???
        let userData = await User.findById(userId).exec();

        // const userData = await User.findById(userId);
        if (!userData) {
            return res.status(404).send('User not found');
        }
        console.log(userData);

        return res.render(`plain/index`, { user: userData });
    })

    // form
    .get('/register', function (req, res) {
        return res.render('demo1/index', { data: null })
    })

    // register
    .post('/register/form/:id', async function (req, res) {
        // get the data from the fom 
        // const {
        //     firstName,
        //     middleName,
        //     lastName,
        //     userName,
        //     email,
        //     phone,
        //     address,
        //     socialLinks,
        //     bio,
        //     workExperience,
        //     education,
        //     skills,
        //     templateId
        // } = req.body;

        // check the id passes in the url
        const id = req.params.id;
        const userId = req.session.id;

        // switch case between 1 and 6
        switch (id) {
            case '1':
                const {
                    firstName,
                    middleName,
                    lastName,
                    userName
                } = req.body

                console.log(userId);
                // validate the data
                if (!firstName || !lastName || !userName) {
                    return res.status(400).send('All fields are required');
                }

                // saniatise the data for security

                //  push the data to node-cache
                map.set(userId, {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    userName: userName
                })

                res.sendStatus(200);
                break;

            case '2':
                const {
                    email,
                    phone,
                    address,
                    socialLinks
                } = req.body

                console.log(userId);
                // validate the data
                if (!email || !phone || !address || !socialLinks) {
                    return res.status(400).send('All fields are required');
                }

                // saniatise the data for security

                //  push the data to node-cache
                var oldData = map.get(userId);

                links = socialLinks.map(link => ({
                    link,
                    platform: link.split('://')[0]
                }))

                oldData.socialLinks = links
                oldData.email = email
                oldData.phone = phone
                oldData.address = address

                map.set(userId, oldData)
                res.sendStatus(200);
                break;
            case '3':
                const {
                    bio
                } = req.body

                console.log(userId);

                // validate the data
                if (!bio) {
                    return res.status(400).send('All fields are required');
                }

                // saniatise the data for security

                //  push the data to node-cache
                var oldData = map.get(userId);
                oldData.bio = bio

                map.set(userId, oldData)
                res.sendStatus(200);
                break;
            case '4':

                var workExperience = getGrpedData(req.body);

                console.log(userId);

                // validate the data
                if (!workExperience) {
                    return res.status(400).send('All fields are required');
                }

                // saniatise the data for security
                console.log(workExperience);
                //  push the data to node-cache
                var oldData = map.get(userId);

                oldData.workExperience = workExperience

                map.set(userId, oldData)

                res.sendStatus(200);
                break;
            case '5':

                var education = getGrpedData(req.body);

                console.log(userId);

                // validate the data
                if (!education) {
                    return res.status(400).send('All fields are required');
                }

                // saniatise the data for security
                //  push the data to node-cache
                var oldData = map.get(userId);
            
                oldData.education = education

                map.set(userId, oldData)

                res.sendStatus(200);
                break;
            case '6':
                const {
                    skills
                } = req.body

                // validate the data
                if (!skills) {
                    return res.status(400).send('All fields are required');
                }

                // saniatise the data for security

                // get the data from the cache
                const userData = map.get(userId);

                // add the skills to the userdata
                userData.skills = skills;
                // create a new user
                try {
                    User.create({
                        ...userData
                    })
                } catch (err) {
                    console.log(err);
                    return res.status(500).send(`Error : ${err}`);
                }

                // generate a url for the user
                const systemUserNames =await User.findOne({
                    userName: userData.userName
                }).exec();

                if (systemUserNames) {
                    return res.status(400).redirect(`/profile/${systemUserNames._id}`);
                }

                res.sendStatus(200);
                break;
            default:
                res.sendStatus(400);
                break;
        }
    })

    .post('/registerTest', function (req, res) {

        // get the data from the form
        const {
            firstName,
            middleName,
            lastName,
            userName,
            email,
            phone,
            address,
            socialLinks,
            bio,
            workExperience,
            education,
            skills,
            templateId
        } = req.body;

        console.log(req.body)
        console.log(req.session.id)
        console.log(req.session)
        return res.sendStatus(200)
    })

    // update the user data
    .patch('/register', function (req, res) {

        // get the data from the fom 
        const {
            userName,
            email,
            phone,
            address,
            socialLinks,
            bio,
            workExperience,
            education,
            skills,
            templateId
        } = req.body;

        // update the user, can we get more safety ????
        try {
            const userData = User.findOneAndUpdate(
                { username },
                {
                    email,
                    phone,
                    address,
                    socialLinks,
                    bio,
                    workExperience,
                    education,
                    skills,
                    templateId
                }
            )
        } catch {
            console.log(err);
            return res.status(500).send(`Error : ${err}`);
        }
    })

    .get('/:fileName.html', function (req, res, next) {
        /**
         * THE /:id.html is going to capture all the redirects from the ejs 
         * I have no time to create a router
         * SO CAPTCHA ALL THE IDS IE : n.ejs and render n if it's responding ejs file is present
         * if file if not present , throw a 404 error by invoking next
         */
        const fileName = String(req.params.fileName).trim();
        console.log(fileName);
        // pass cookie from here the check cookie from reading pages
        // check from 
        const cookie = 1;
        try {
            res
                // This render function should be the "last thing" sent back to the client
                .render(`${fileName}`, { cookie })
            /**
             * THIS BUG WAS SELF INDUCED , 
             * IF THE EJS FILE IS NOT FOUND THE TRIGGER BUG AND SEND 404 ERROR BELOW
             */
            // .cs('cooks' , cookie , { signed: true });
        } catch (er) {
            res.status(404).send(
                `
            <h2>${fileName}.html does not exits on this server<h2/>
            <br />
            <a href="/">Go home</a>
            `
            );
            console.log()
            console.log(`Er : `, er);
            console.log()
            console.log(`lorem ipsum`)
        }
    })

    .get('/:fileName/:id.html', function (req, res, next) {
        // send back file with id , get data and loop and pass it through to the ejs file and loop , data to be fetched from db
        /**
         * THE /:id.html is going to capture all the redirects from the ejs 
         * I have no time to create a router
         * SO CAPTCHA ALL THE IDS IE : n.ejs and render n if it's responding ejs file is present
         * if file if not present , throw a 404 error by invoking next
         */
        return res.send(`${String(req.params.fileName).trim()} : id ${String(req.params.id).trim()}`)
        const fileName = String(req.params.fileName).trim();
        console.log(fileName);
        // pass cookie from here the check cookie from reading pages
        // check from 
        const cookie = 1;
        try {
            res
                .render(`${fileName}`, { cookie })
                /**
                 * THIS BUG WAS SELF INDUCED , 
                 */
                .cs('cooks', cookie, { signed: true })
                ;
        } catch (er) {
            res.status(500).send('Internal Server Error');
            console.log()
            console.log(`Er : `, er);
            console.log()
            console.log(`lorem ipsum`)
        }
    })

    // 404 error
    .use(function (req, res) {
        return res.status(404)
            .send(`<h1>404 error</h1>`)
    })


module.exports = {
    app,
    port
}