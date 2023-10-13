const
express = require("express"),
app = express(),
path = require("path"),
ejs = require("ejs"),
port = process.env.PORT || 5700
;


// connect to the database
require("./functions/connectDb")

app
// configs
.use(express.json())
.use(express.urlencoded())
.use(require("helmet")())
// make files accesible
.use(express.static(path.join(`${__dirname}/views/`)))



// view engine
.set('view engine' , 'ejs')
.set('views' , `${__dirname}/views`)


// mids
.get('/' , function(req , res){
    // restrict access points , generate and ssl and pin
    return res.render('index');
})

// form
.get('/form' , function(req , res){
    return res.render('form' , { dat : 'Dat'})
})


// get qr code
.get('/qr/:id' , function(req, res){
    return res.send(req.params.id)
})

// .get('/hc' , function(_ , res){
//     return res.send(`Hi`)
// })

.get('/:fileName.html' , function(req, res , next){
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
    try{
        res
        // This render function should be the "last thing" sent back to the client
        .render(`${fileName}` , { cookie })
        /**
         * THIS BUG WAS SELF INDUCED , 
         * IF THE EJS FILE IS NOT FOUND THE TRIGGER BUG AND SEND 404 ERROR BELOW
         */
        .cs('cooks' , cookie , { signed: true })
        ;
    } catch(er){
        res.status(404).send(
            `
            <h2>${fileName}.html does not exits on this server<h2/>
            <br />
            <a href="/">Go home</a>
            `
            );
        console.log()
        console.log(`Er : ` , er);
        console.log()
        console.log(`lorem ipsum`)
    }
})

.get('/:fileName/:id.html' , function(req, res , next){
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
    try{
        res
        .render(`${fileName}` , { cookie })
        /**
         * THIS BUG WAS SELF INDUCED , 
         */
        .cs('cooks' , cookie , { signed: true })
        ;
    } catch(er){
        res.status(500).send('Internal Server Error');
        console.log()
        console.log(`Er : ` , er);
        console.log()
        console.log(`lorem ipsum`)
    }
})
// 404 error
.use(function(req , res){
    return res.status(404)
    .send(`<h1>404 error</h1>`)
})


// dbs
require("http").createServer(app).listen(port , undefined , undefined , function(er){
    console.log( `Server ${er ? "crushing" : "running"} on port ${port}`)
})