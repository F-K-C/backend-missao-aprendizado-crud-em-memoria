const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Readl all (GET) /personagem
app.get('/personagem', function(req, res){
    res.send(lista)
})

//EndPoint Read By ID
app.get('/personagem/:id', function(req, res) {
    const id = req.params.id
    const item = lista[id - 1]

    res.send(item)
})
app.use(express.json())

// Endpoint Create [Post]
app.post('/personagem', function (req, res){
    const body = req.body

    const novoItem = body.nome

    lista.push(novoItem)

    res.send('Item adicionado com sucesso: '+ novoItem)
})


app.put('/personagem/:id', function(req, res){
    const id = req.params.id
    const body = req.body
    const novoItem = body.nome
    lista[id-1] = novoItem
    res.send('Item atualizado com sucesso: ' + id + ' - ' +  novoItem)
})

app.listen(3000)
