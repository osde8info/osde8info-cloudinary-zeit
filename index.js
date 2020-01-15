const express = require('express')
const cloudinary = require('cloudinary')
const app = express()

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>where can we go today</h1>
        <h2>visit <a href="https://www.visitsurrey.com/">surrey</a></h2>
        <h2>visit <a href="https://www.visitsurrey.com/explore/towns">surrey map</a></h2>
        <h2>visit <a href="https://www.visitsoutheastengland.com/places-to-visit/sussex">sussex</a></h2>
        <h2>visit <a href="https://www.visitsoutheastengland.com/places-to-visit/sussex/map">sussex map</a></h2>
    `)
})

module.exports = app

if (process.env.LOCALRUN) app.listen(3000)

