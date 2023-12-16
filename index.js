const {app, port} = require("./server")

require("http").createServer(app).listen(port, undefined, undefined, function (er) {
    console.log(`Server ${er ? "crashing" : "running"} on port ${port}`)
})