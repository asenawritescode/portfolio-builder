const
mongoose =  require("mongoose"),
mongo_link = `mongodb+srv://jwtuser:jwtuser@cluster0.fgsl9.mongodb.net/portfoliosite?retryWrites=true&w=majority`
;

mongoose.connect(mongo_link)
.then(function(){
    console.log(`Connected to the database`);
})
.catch(function(er){
    console.log(`Could not connect to the database`)
})