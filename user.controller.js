const user = {
    list: (req, res) => {
        res.status(200).send('Hola esta es una nueva app')
    },
    create: (req, res) => {
        res.status(201).send('Creando la app')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando un dato')
    },
    destroy: (req, res) => {
        res.status(204).send('Borrando un dato')
    },
    get: (req, res) => {
        res.status(200).send('Este es un dato')
    }
}

module.exports = user;