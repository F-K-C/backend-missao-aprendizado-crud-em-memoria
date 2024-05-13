const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Readl all (GET) /personagem
app.get('/personagem', function(req, res){
    res.send(lista.filter(Boolean))
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

    if(!novoItem){
        return res.send('Corpo da requisição deve contar a propriedade `nome`.')
    }

    if(lista.includes(novoItem)) {
        return res.send('Esse item já existe na lista.')
    }

    lista.push(novoItem)

    res.send('Item adicionado com sucesso: '+ novoItem)
})


app.put('/personagem/:id', function(req, res){
    const id = req.params.id
    const body = req.body
    const novoItem = body.nome

    if(!novoItem){
        return res.send('Corpo da requisição deve contar a propriedade `nome`.')
    }

    if(lista.includes(novoItem)) {
        return res.send('Esse item já existe na lista.')
    }


    lista[id-1] = novoItem
    res.send('Item atualizado com sucesso: ' + id + ' - ' +  novoItem)
})

app.delete('/personagem/:id', function(req, res) {
    const id = req.params.id
    delete lista[id-1]
    res.send('Item removido com sucesso: ' + id)
})

app.listen(3000)
