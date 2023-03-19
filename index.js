const express = require("express");
const app = express();
const route = require("./routes/route");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());
app.use("/", route);

app.listen(5000, () => {
  console.log("listning the port 5000");
});
