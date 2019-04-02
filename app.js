const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => 
    res.send('Hello sebastian'))


app.listen(3000, function(){
    console.log('listening...')
})

app.get('/',(res, req) => 
res.send('HelloSebastian')
)

app.get('/api/courses', (req,res) =>{
    res.send([1,2,3])
    
}
)