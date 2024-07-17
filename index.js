//1) import json-server(library)

const jsonServer = require('json-server')

//2) create json server - using create() method

const mediaPlayerServer = jsonServer.create()

//3) create path for the json file(data file) - router() method is using to create

const router = jsonServer.router("db.json")

//4) create middleware to convert/parse json -middleware

const middleware = jsonServer.defaults()


//5) allow server to use router and middleware

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//6) set up port for the server to run

PORT = 3000 || process.env.PORT

//7) RUN/Listen to the request

mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})





