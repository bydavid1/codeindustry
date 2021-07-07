const express = require('express');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')
const app = express();

//Gettinf routes
const routes = require('./api/routes')

//Setup port 
app.set('port', process.env.PORT || 3000)

//Set assets path
app.use(express.static(path.join(__dirname, './public/')))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use('/', routes)


//Listen server (development only)
app.listen(app.get('port'), () => console.log(`Server listen on http://127.0.0.1:${app.get('port')}`) )
