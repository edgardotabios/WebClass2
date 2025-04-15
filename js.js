let multiple = function multiplication(p1, p2) {
    return p1 * p2;
}

console.log("Functions")

console.log("multiple >>",multiple)

console.log(multiple(2, 3))




// this work
console.log("Application is starting");
 
const express = require('express')
const app = express()
const port = 3000
 
app.get("/", (req, res, next) => {
    console.log("I received a get request on the path // ")
    res.send("<h1>Acknowledged</h1>")
})
 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
 
app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})
// this work ends