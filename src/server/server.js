const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.put('/addAnime', (req, res) => {

    console.log('Un\' anime è stato inserito');
    res.send('ok')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
