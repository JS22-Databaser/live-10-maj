const express = require('express')
const cors = require('cors')
const app = express()

const createDbConnection = require('./model/db');

const beansRouter = require('./routes/beans')
const PORT = 8000


app.use(cors())
app.use(express.json())
app.use('/api/beans', beansRouter)


app.listen(PORT, () => {
    createDbConnection();
    console.log(`Server started on port ${PORT}`);
})


