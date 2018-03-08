const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/labs/:id', (req, res) => res.render('pages/labs/' + req.params.id))
  .get('/tasks/:id', (req, res) => res.render('pages/tasks/' + req.params.id))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
