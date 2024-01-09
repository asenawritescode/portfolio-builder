const {app, port} = require("./src/server")

// Start the server, entry point.
require("http").createServer(app).listen(port, undefined, undefined, function (er) {
    console.log(`Server ${er ? "crashing" : "running"} on port ${port}`)
})
