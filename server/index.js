const serverless = require('serverless-http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path')
const app = express();

require('dotenv').config()

const routes = require('./routes/routes')

app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use('/', routes)

if(process.env.NODE_ENV == 'development') {

    app.set('port', process.env.PORT || 3000)

    app.listen(app.get('port'), () => {
        console.log(`Server listen on http://127.0.0.1:${app.get('port')}`);
    })    
} else {
    module.exports.handler = serverless(app);
}