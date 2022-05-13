const express = require("express")
const tdee =  require("./routes/tdee")
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(tdee)

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res)=> {
  res.sendFile('/index.html');
})


app.listen(port);
console.log(`Application running on port ${port}`);