const express = require("express");
const app = express();
const port = 3001;
const pool = require("./db")

app.use((req, res, next) => {
    res
        .header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Request-Method", "*")
        .header("Access-Control-Allow-Headers", "*")
        .header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));



app.get('/jobs', (req, res) => {
    pool.query("SELECT * FROM jobs", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});
app.delete('/deletejob',(req,res)=>
{

    pool.query('delete from jobs where id=?',
    [
        req.body.id
    ])
    res.send()
})

app.post('/createJob', (req, res) => {

    const body=req.body;
    var date;
    date = new Date().toLocaleString('indian', { timeZone: 'asia/kolkata' }).replace(/(\w+)\/(\w+)\/(\w+), (\w+)/, '$3-$2-$1 $4');
    pool.query("insert into jobs values(?,?,?,?,?,?,?,?,?,?)",
    [
        body.id,
        body.name,
        body.title,
        body.description,
        body.location,
        body.type,
        body.workspace,
        date,
        body.skills,
        body.img
    ])
    res.send()
})


app.listen(port, () => {
    console.log("Server listening on PORT:", port)
})