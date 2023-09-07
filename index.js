const express= require('express') ; 
const app = express() ; 
const PORT  = 8080; 

app.use(express.json()) ; 

app.get('/tshirts',(req,res)=>{
    res.status(200).send({
         logo: "34" 

    })

}) ; 

app.post('/tshirts/:id', (req,res)=>{
      
      const {id} = req.params ; 
      const {logo} = req.body ; 
      if(!logo) res.send("No logo is there !! ") ; 
      else res.send(`Your logo is ${logo} & id is : ${id}`) ; 

}) ; 

app.listen(PORT, ()=>{
   console.log(`App running on port: ${PORT} ` ) ; 

})  ; 