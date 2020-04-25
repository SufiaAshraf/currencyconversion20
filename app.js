var express = require('express'),
    app = express();
var http = require('http');
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.static("views"))
// Setting Local Host
    // const hostname = '0.0.0.0';
    const port =  process.env.port || 3000
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
    });

// // Landing page
app.get("/", function(req, res){
    res.render("landing");
});

// Port
app.listen(port, () => {
    console.log(`Server running at ` +port);
});
      