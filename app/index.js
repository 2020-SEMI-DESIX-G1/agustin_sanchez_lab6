const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const students = [{ age: 23, name: "Agustin" }, { age: 18, name: "Ejemplo" }]


app.use(bodyParser.json())

app.get("/estudiantes", (req, res) => {
    res.json(students);
})

app.post("/estudiantes/", (req, res) => {
    var x = req.body
    students.push(x)
    res.json(x);
})

app.get("/estudiantes/:id", (req, res) => {
    res.json(students[req.params.id])
})

app.put("/estudiantes/:id", (req, res) => {
    var x = req.params.id
    students[x - 1].age = req.body.age
    students[x - 1].name = req.body.name
    res.send("updated")
})


app.delete("/estudiantes/:id", (req, res) => {
    var x = req.params.id
    students.splice(x);
    res.send("deleted")
})



app.listen(5000, () => { console.log("server on port 5000") })

