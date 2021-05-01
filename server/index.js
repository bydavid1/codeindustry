const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();


app.set('port', process.env.PORT || 8080)

app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.json())
app.use(morgan('tiny'))

app.listen(app.get('port'), () => {
    console.log(`Server listen on http://127.0.0.1:${app.get('port')}`);
})
