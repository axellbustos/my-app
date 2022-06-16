const express=require('express')
const app=express()

app.get('/',(req,res)=> res.send('hola mundo!!'))
app.get('/salida',(req,res)=> res.send('chau!!'))

app.listen(3030,()=> console.log('server running in port 3030'))