const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

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

app.listen(port, () => {
    console.log(`App is listening to the  port ${port}`)
})

/**
 * 1) Url params https://google.com/price/1
 * 2) Query params https://google.com?count=1&price=100
 * 3) Body params
 */