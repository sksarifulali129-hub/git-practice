/*console.log("hello world , howare you, nodemon");
console.log("testing nodemon");*/

const express = require("express");
const app = express();
app.get("/", (req,res) => {
    res.send("hello") 
}
)

app.get("/about", (req,res) => {
    res.send("Welcome to About Page")
}
)

app.get("/contact", (req,res) => {
    res.send("Welcome to Contact Page")
}
)
app.get("/admin", (req,res) => {
    res.send("Welcome to Admin Page")
})
app.get("/student", (req,res) => {
    res.send("Welcome to student page")
})
app.get ("/books/:id", (req,res) => {
    res.send(req.params.id);
});
app.get("/users/:name", (req,res) => {
    res.send("Hello" + req.params.name);
});
app.get("/developers/:category/:id", (req,res) => {
    res.send("Hello developer"  + req.params.category + ".Your id is: "  + req.params.id);
});
app.get("/ebooks/:id/:category/:name" , (req,res) => {
    res.send(req.params.id + req.params.category + req.params.name);
});
app.get("/search" , (req,res) => {
    res.send("your ordered book is : " +" " +req.query.book);
});
app.use((req,res,next) => {
    console.log("A request has arrived");
    next();
}
);
app.get("/find", (req,res) => {
    res.send("Your book name is: " + " " + req.query.book +" and id is:" + " " + req.query.id);
});
app.listen(3000); 