const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.lslkadu.mongodb.net/myapp?retryWrites=true&w=majority') //Connection

const User = mongoose.model('User', {
    username: String,
    age: Number,    
})

const crear = async () => {
    const user = new User({username: 'Carlos', age: 22})
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({username: 'Carlos'})
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const uOne = await User.findOne({username: 'Carlos'})
    console.log(uOne)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({username: 'Carlos'})
    user.age = 14
    await user.save()
    console.log(user)
}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({username: 'Carlos'})
    if(user){
        await user.remove()
    }
}

//eliminar();