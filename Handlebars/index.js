import exphbs from 'express-handlebars'
import express from 'express'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('View engine', 'handlebars')

app.get('/', function (req, res){
    res.render('home')
})

app.listen(3000, console.log("app rodando na porta 3000"))