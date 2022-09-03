const express = require ("express");
const app= express();

app.get("/",(req,res)=> {
  res.send("hellw world");
});

// port
app.listen(3000);

