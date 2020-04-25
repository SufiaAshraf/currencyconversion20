var express = require('express'),
    app = express();

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.static("views"))
// Setting Local Host
    // const hostname = '0.0.0.0';
    // const port = 3000;

// Landing page
app.get("/", function(req, res){
    res.render("landing");
});

// Port
app.listen(process.env.port || 3000,
    () => console.log(`Server running`));
      
