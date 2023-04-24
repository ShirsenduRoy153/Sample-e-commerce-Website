const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection1 = require("./mongodb1")
const collection2 = require("./mongodb2")

const tempelatePath = path.join(__dirname, "templates")

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))

//-------------------GET-------------------//
app.get('/', (req, res) => {
    res.render('login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/item1', (req, res) => {
    res.render('item1')
})

app.get('/item2', (req, res) => {
    res.render('item2')
})

app.get('/item3', (req, res) => {
    res.render('item3')
})

app.get('/item4', (req, res) => {
    res.render('item4')
})

//-------------------POST-----------------//
app.post('/login', async(req, res) => {
    try {
        const c1 = req.body.name;
        const c2 = req.body.password;

        const c3 = await collection1.findOne({ name: c1 });

        if (c3.password === c2) {
            res.render("home")
        } else {
            res.send("wrong Password")
        }
    } catch (error) {
        res.send("Invalid Username")
    }
})

app.post('/signup', async(req, res) => {
    try {
        const c1 = req.body.name;
        const c2 = req.body.password;

        const c3 = await collection1.findOne({ name: c1 });

        if (c3.name === c1)
            res.send("Username already")
    } catch {
        const data = {
            name: req.body.name,
            password: req.body.password
        }
        await collection1.insertMany([data])
        res.render("home")
    }
})

app.post('/item1', async(req, res) => {
    const data = {
        product: "product 1",
        name: req.body.name,
        qty: req.body.qty,
        address: req.body.address,
        cont: req.body.cont
    }
    await collection2.insertMany([data])
    res.render("home")
})

app.post('/item2', async(req, res) => {
    const data = {
        product: "product 2",
        name: req.body.name,
        qty: req.body.qty,
        address: req.body.address,
        cont: req.body.cont
    }
    await collection2.insertMany([data])
    res.render("home")
})

app.post('/item3', async(req, res) => {
    const data = {
        product: "product 3",
        name: req.body.name,
        qty: req.body.qty,
        address: req.body.address,
        cont: req.body.cont
    }
    await collection2.insertMany([data])
    res.render("home")
})

app.post('/item4', async(req, res) => {
    const data = {
        product: "product 4",
        name: req.body.name,
        qty: req.body.qty,
        address: req.body.address,
        cont: req.body.cont
    }
    await collection2.insertMany([data])
    res.render("home")
})

app.listen(5000, () => {
    console.log("Port Connected...")
})