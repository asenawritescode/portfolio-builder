const
mongoose =  require("mongoose"),
mongo_link = 'mongodb://localhost:27017/porfolio' // BUG : Not loading env file !!!
;

mongoose.connect(mongo_link)
.then(function(){
    console.log(`Connected to the database`);
})
.catch(function(er){
    console.log(`Could not connect to the database`)
})

