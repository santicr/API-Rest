const express = require('express') //Importing express dependence
const app = express() //Our application
const port = 3000 //Port

app.get('/', (req, res) => { //Request of a client to the API, response of the APi to the user
    res.status(200).send('Hola, esta es mi primera app con GET') //Status 200 for ok result and return data to users
})

app.post('/', (req, res) => {
    res.status(201).send('Hola, esta es mi primera app con POST') //Status 201 for ok result and created status (we can return data like id)
})

//Status 204 is for ok result but with no data to user. SendStatus is only for send status, the other one is for send data and status
//Id is for get an ID to each route (after localhost:3000)
app.put('/:id', (req, res) => {
    console.log(req.params)
     res.sendStatus(204)
})

app.patch('/:id', (req, res) => {
    res.sendStatus(204)
})

app.get('/:id', (req, res) => {
    res.status(200).send(req.params)
})

app.delete('/:id', (req, res) => {
    res.sendStatus(204)
})

app.listen(port, () => {
    console.log("Arrancando la app")
}) //Listen the port and run the app