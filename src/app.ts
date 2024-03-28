import express from 'express'

const app = express()

app.use('/', (req, res) =>{
    res.json({message: 'Hello world'})
})

app.listen(8000, () => {console.log("Listening on port 8000")})