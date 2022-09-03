const express = require ("express");
const app= express();

// routes
app.get("/",(req,res)=> {
  res.send("hellw world");
});

app.get('/posts',(req,res)=> {
  res.send('we are on posts')
})

// port for
app.listen(3000);

