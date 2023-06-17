const express = require('express');
const mysql = require("mysql");
const cors = require('cors');
const path = require("path");
const url = require('url');


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pizzas",
  password: "",
});
const PORT = process.env.PORT || 3001;
const app = express();


con.connect();
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


app.get('/getPizzas', (req,res) => {
    let query = "SELECT * FROM Item";
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });

});
app.get('/getPizzaspricenull', (req,res) => {
    let query = `SELECT * FROM Item ORDER BY price`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});

app.get('/getPizzasnamenull', (req,res) => {
    let query = "SELECT * FROM Item ORDER BY name";
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});


app.get('/getPizzasSort0', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '0'`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort0price', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '0' ORDER BY price`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort0name', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '0' ORDER BY name`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});


app.get('/getPizzasSort1', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '1'`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort1price', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '1' ORDER BY price`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort1name', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '1' ORDER BY name`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});


app.get('/getPizzasSort2', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '2'`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort2price', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '2' ORDER BY price`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort2name', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '2' ORDER BY name`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});


app.get('/getPizzasSort3', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '3'`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort3price', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '3' ORDER BY price`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort3name', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '3' ORDER BY name`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});


app.get('/getPizzasSort4', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '4'`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort4price', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '4' ORDER BY price`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});
app.get('/getPizzasSort4name', (req,res) => {
    let query = `SELECT * FROM Item WHERE category = '4' ORDER BY name`;
    con.query(query, (err, result) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result));
    });
});



app.post('/savePizzas', (req,res) => {
    req.header("Content-Type",'application/json');
    let urlRequest = url.parse(req.url, true);
    let params = urlRequest.query.pizzas.toString().split(",");
    let id = params[0];
    let names = params[1];
    let img = params[2];
    img = 'pizzas/'+img.slice(12, img.length);
    let price = params[3];
    let sizes = params[4];
    let types = params[5];
    let category = params[6];
    let query = `UPDATE Item SET imageUrl="${img}", name="${names}", types="${types}", sizes="${sizes}", price="${price}", category="${category}" WHERE id_item=${id}`;
    console.log(query);
    con.query(query, (err, result) => {
        if(err) console.log(err);
    });
});


app.post('/addPizzas', (req,res) => {
    req.header("Content-Type",'application/json');
    let urlRequest = url.parse(req.url, true);
    let params = urlRequest.query.pizzas.toString().split(",");
    let names = params[0];
    let img = params[1];
    img = 'pizzas/'+img.slice(12, img.length);
    let price = params[2];
    let sizes = params[3];
    let types = params[4];
    let category = params[5];
    let query = `INSERT INTO Item(imageUrl,name,types,sizes,price,category) VALUES("${img}","${names}","${types}","${sizes}","${price}","${category}")`;
    con.query(query, (err, result) => {
        if(err) console.log(err);
    });
});


app.post('/deletePizzas', (req,res) => {
    req.header("Content-Type",'application/json');
    let urlRequest = url.parse(req.url, true);
    let params = urlRequest.query.pizzas.toString();
    let query = `DELETE FROM Item WHERE id_item=${params}`;
    con.query(query, (err, result) => {
        if(err) console.log(err);
    });
});

