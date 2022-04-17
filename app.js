//jshint esversion:6
import express from 'express';
const app = express();
import cnbcMarket from 'cnbc-market';
app.set("view engine", "ejs");
app.use(express.static("public"));
let pageviews = 0;
app.get("/", function(req, res){
  pageviews++;
  cnbcMarket().then(cnbcdata => res.render("home", {data : cnbcdata, pageviews_count : pageviews}) );
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
