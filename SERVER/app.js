const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;




app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


const packages = [
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 2, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 3, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },
    { Pid: 1, Powner: 'Elvis', Ppickup: 'Tanzania', Pdestination: 'Rwanda', Pweight: 30, Pprice: 150000 },

]
app.get('/', (req, res) => {
    res.redirect("/api/v1/packages");
});
app.get('/api/v1/packages', (req, res) => {
    res.send(packages);
});
app.get('/api/v1/packages/:Pid', (req, res) => {
    const package = packages.find(c => c.Pid === parseInt(req.params.Pid));
    if (!package) {
        return res.status(404).send("The Package was not found")
    } else {
        res.send(package);
    }
});

app.get('/api/v1/packages/:Powner', (req, res) => {
    const powner = parcels.find(e => e.Powner === req.params.Powner);
    if (!powner) {
        return res.status(400).send("Person not found");
    } else {
        res.send(powner);
    }
});


app.put('/api/v1/packages/:Pid/cancel', (req, res) => {
    const amendPackages = packages.find(e => e.Pid === parseInt(req.params.Pid));
    if (!amendPackages) {
        return res.status(404).send("The Package was not Found");
    } else {
        packages.splice(packages.indexOf(amendPackages), 1);
        res.send(amendPackages);
    }
});

app.post('/api/v1/packages', (req, res) => {
    let Pid = packages.length + 1;
    let Pname = req.body.Pname;
    let Powner = req.body.Powner;
    let Plocation = req.body.Plocation;
    let Pdestination = req.body.Pdestination;
    let Pweight = req.body.Pweight;
    let Pheight = req.body.Pheight;
    let Plength = req.body.Plength;
    let Pwidth = req.body.Pwidth;
    //.let Pvolume = parseFloat(Pheight * Plength * Pwidth);
    let Pprice = req.body.Pprice;
    const deliveryOrder = {
        Pid,
        Pname,
        Powner,
        Plocation,
        Pdestination,
        Pweight,
        Pheight,
        Pwidth,
        Plength,
        Pprice
    };
    if (isNaN(Pweight) || isNaN(Pprice)) {
        res.send("Check the weight or price for any errors");
    } else {
        packages.push(deliveryOrder);
        res.send(deliveryOrder);
    };
});

app.listen(port, () => console.log(`The API is listening on ${port}`));
