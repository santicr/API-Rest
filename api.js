const express = require('express') //Importing express dependence
const user = require('./user.controller')
const mongoose = require('mongoose')
const app = express() //Our application
const port = 3000 //Port
app.use(express.json())
mongoose.connect('mongodb+srv://admin:admin@cluster0.lslkadu.mongodb.net/myapp?retryWrites=true&w=majority') //Connection

//Status 204 is for ok result but with no data to user. SendStatus is only for send status, the other one is for send data and status
//Id is for get an ID to each route (after localhost:3000)
//POST is not accesible by URL (use postman for this), but, GET is accessible by URL

app.get('/users', user.list)
app.post('/users', user.create)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.get('/users/:id', user.get)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))


app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send("Esta página no existe")
})

app.listen(port, () => {
    console.log("Arrancando la app")
}) //Listen the port and run the app