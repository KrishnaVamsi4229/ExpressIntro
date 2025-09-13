const express = require('express')
const bodyparser = require('body-parser')
const { PORT } = require('./config/serverConfig')

const app = express()


app.use(bodyparser.json())
app.use(bodyparser.text())
app.use(bodyparser.urlencoded({extended : true}))

//routes

app.get('/ping', (request , response) => {
    console.log("ping received")
    response.json({message : "PING received"})
    // console.log(request.query);  // Query params
    // console.log(request.body); // Body params
}) // 2 arguments , 1 -> route as a string , 2 -> callback

app.get('/categories/:category/:id', (request , response) => {
    console.log(request.headers);
    console.log(request.params);
})

app.listen(PORT || 3001, () => {
    console.log(`App is listening to the  port ${PORT || 3001}`)
})

/**
 * 1) Url params https://google.com/price/1
 * 2) Query params https://google.com?count=1&price=100
 * 3) Body params
 */