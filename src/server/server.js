const express = require('express')
const fs = require('fs')

var cors = require('cors')
const app = express()
const port = 3030

app.use(cors())

app.put('/addAnime', (req, res) => {

    let animeToAdd = JSON.parse(req.query.anime)
    
    let db = JSON.parse( fs.readFileSync(__dirname +'/../animeList.json', 'utf8') )
    db[animeToAdd.mal_id] = animeToAdd
    
    fs.writeFileSync(__dirname +'/../animeList.json', JSON.stringify(db, null, '\t'))
    
    console.log('Un\' anime è stato inserito')
    res.send('Anime added')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
