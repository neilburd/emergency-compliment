module.exports = {
    index(req, res){
      var name = req.params.name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      var compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you",
        "Node way, Your great!",
        "So amazing!"
        ];
    var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080","#FFAF00"]

    var randomNum = Math.floor(Math.random()*compliments.length);
    var randomHex = Math.floor(Math.random()*colors.length);
    var compliment = compliments[randomNum];
    var randomColor = colors[randomHex];
    res.render("index", {
      compliment,
      randomColor,
      name
    });

    }

};
