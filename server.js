const express = require('express');
const payload = require('payload');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'

require('dotenv').config();
const server = express();


const app = next({dev})
const handle = app.getRequestHandler()

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: server,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

app.prepare().then(()=>{
  server.get("*",(req,res)=>{
    return handle(req,res)
  })
  server.listen(3000,(err)=>{
    console.log("running")
  })
})


 
