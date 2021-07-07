const express = require('express');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')
const app = express();

const routes = require('./api/routes')

// const portfolio = require('./api/portfolio')
// const index = require('./api/index')

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, './public/')))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use('/', routes)

// app.use('/portfolio', portfolio)
// app.use('/', index)

app.listen(app.get('port'), () => console.log(`Server listen on http://127.0.0.1:${app.get('port')}`) )
