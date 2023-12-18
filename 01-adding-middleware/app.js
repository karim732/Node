// const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // Allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>Page not found");
});

// const server = http.createServer(app);

app.listen(3000);
