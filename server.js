var express = require("express")

// Create the app
var app = express()

// server
app.use(express.static('public'))

app.listen(3000, function(){
  console.log('express server is up on port 3000')
})
