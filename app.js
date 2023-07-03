const express = require("express");
const bodyP = require("body-parser");
//const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine' , "ejs");

app.use(bodyP.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//mongoose.connect("mongodb+srv://Andrew:andrew12345@todoapp.upy9j.gcp.mongodb.net/ToDoApp?retryWrites=true&w=majority", {useNewUrlParser: true});

/*const itemSchema = {
    name: "String"
};

const Item = mongoose.model("item", itemSchema);

const item1 = new Item({
    name: "Hello! Welcome to the list"
});

const item2 = new Item({
    name: "To add items press +"
});

const item3 = new Item({
    name: "<-- To delete press here"
});

const DefaultArray = [item1, item2, item3];
*/

// Main Routes
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


// Catto Routes
app.get("/catto", function(req, res) {
    res.sendFile(__dirname + "/catto.html");
});


// To Do List Routes
/*app.get("/todoapp", (req, res) => {
    Item.find({}, function(err, itemsDB){
        if(itemsDB.length === 0) {
            Item.insertMany(DefaultArray, (err) => {
                if(err) {
                    console.log("There was an error adding default items!");
                } else {
                    console.log("Successfully added default items!");
                }
            }); 
            res.redirect("/todoapp");  
        } else {
            let day = date.getDate(); 
            res.render("list", {kindOfDay: day, newListItem: itemsDB});
        }        
    });
    
});
app.post("/todoapp", (req, res) => {
    let itemName = req.body.newFood;
    let newItem = new Item({
        name: itemName
    });
    newItem.save( err => {
        if(err) {
            console.log("There was an error adding items");
        } else {
            console.log("Successfuly added a new item");
        }
    });
    res.redirect("/todoapp");
});
app.post("/delete", (req, res) => {
    const delID = req.body.checkbox;
    Item.findByIdAndRemove(delID, err => {
        if(err) {
            console.log("There was an error deleting items");
        } else {
            console.log("Successfuly deleted an item");
        }
    });
    res.redirect("/todoapp");
});
*/


// Server listen
app.listen(process.env.PORT || 3000 , function () {
    console.log("Server is running on port 3000");
});
