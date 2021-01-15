const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')
const app = express()
const PORT = 3001
let user = undefined

app.use(bodyParser.urlencoded({ extended: false }))
app.post('/index', (req, res) => { 
    if(!req.body.name || !req.body.telephone) return res.sendStatus(400)   
    const message = {        
        to: 'testsalam@mail.ru',
        subject: '',
        text: `
        Имя: ${req.body.name}
        Телефон: ${req.body.telephone}`
    }
    mailer(message) 
    user = req.body 
    // res.redirect('/index') 
})
app.get('/index', (req, res) => { 
    if(typeof user !== 'object') return res.sendFile(__dirname + '/index.html')   
    res.send(`Вы заказали звонок, вам перезвонят на номер: ${user.telephone}`) 
    user = undefined  
})
app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/index`))



