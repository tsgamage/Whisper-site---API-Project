import express from "express"
import axios from "axios"

const app = express()
const PORT = 3000

app.listen(PORT,()=>{
    console.log("Listening to port ", PORT)
})
