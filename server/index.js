const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();
const routes = require('./routes/routes')
const db = require('./database/connection')
const cors = require('cors')

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Database connected")
}).catch(err => {
    console.log(err)
})

app.set('port', process.env.PORT || 8080)

app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use('/', routes)


app.listen(app.get('port'), () => {
    console.log(`Server listen on http://127.0.0.1:${app.get('port')}`);
})
