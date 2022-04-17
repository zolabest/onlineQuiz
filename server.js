var express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const fs = require('fs');
const PORT = 3000;
const Quiz = require("./quiz.js");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var reactViews = require('express-react-views');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('jsx', reactViews.createEngine());
app.use(express.static('views/pages'));
app.use(cors());

app.get("/hello", async (req, res) => {
    res.send("hello");
});
app.get("/quiz", async (req, res) => {
    quiz = new Quiz();
    //res.render("quiz", { quiz: quiz.Questions });
    res.send(quiz.Questions)
});
app.get("/quizFile/:fn", async (req, res) => {
    const fn = "quiz" + req.params.fn + ".json";
    console.log("FN:", fn);
    const quizData = getQuiz(fn);
    console.log(quizData);
    res.send(quizData);
});
const getQuiz = (fn) => {
    console.log("QFN: ", fn);
    let data = fs.readFileSync("/Users/zola/Documents/node-projects/project1/data/" + fn);
    console.log("FC: ", data);
    return JSON.parse(data);
}
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});