http = require "http"
express = require "express"
settings = require "./settings"
app = express()
http.createServer app
app.listen 3000, "localhost", () -> console.log "success"
app.get '/', (req, res) -> res.send "こんtには！"

mongoose = require "mongoose"
mongoose.connection.on "open", () -> console.log "success"
mongoose.connection.on "close", () -> console.log "failed"
mongoose.connect "mongodb://localhost/apple"
